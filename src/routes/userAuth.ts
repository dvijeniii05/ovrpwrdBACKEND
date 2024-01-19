import express from "express";
import bodyParser from "body-parser";
import User from "../models/User";
import axios from "axios";
import jwt from "jsonwebtoken";
import { openDotaApi } from "./getRecentMatches";
import { calculation } from "../utils/calculationEngine";
import { dummyRecentMatches } from "../constants/dummyRecentMatches";
import League from "../models/League";

export const router = express.Router();

export interface MatchData {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  hero_id: number;
  game_mode: number;
  hero_damage: number;
  hero_healing: number;
  kills: number;
  deaths: number;
  assists: number;
  start_time: number;
  last_hits: number;
}

export interface UserProps {
  displayName: string;
  emails: Array<{ value: string; verified: boolean }>;
}

export interface UserDetails {
  avatar: string;
  nickname: string;
  email: string;
  fullName: string;
  dob: string;
  gender: string;
  country: string;
}

export interface TokenInterface {
  userEmail: string;
}

const jsonParser = bodyParser.json();

router.post("/registerUser", jsonParser, async (req, res) => {
  console.log("BODY_CHECK", req.body);
  const { nickname, email, fullName, dob, gender, country } = req.body;
  User.findOne({ nickname }).then((user) => {
    if (user) {
      console.log("user_already_exists");
      res.status(422).send({
        message:
          "Nickname is already taken, please create a new one and try again.",
      });
    } else {
      const newUser = new User({
        email,
        fullName,
        nickname,
        dob,
        gender,
        country,
        dota: {},
        rewards: {},
        premium: {},
      });
      newUser.save();
      const jwtToken = jwt.sign({ userEmail: email }, process.env.JWT_SECRET!);
      res.status(200).send({ token: jwtToken });
    }
  });
});

router.get("/loginUser/:email", async (req, res) => {
  const { email } = req.params;
  console.log("BODY_EMAIl", email);
  User.findOne({ email }).then((user) => {
    if (user) {
      console.log("user_exists");
      const jwtToken = jwt.sign({ userEmail: email }, process.env.JWT_SECRET!);
      res
        .status(200)
        .send({ token: jwtToken, isFullyOnboarded: user.isFullyOnboarded });
    } else {
      console.log("user_doesnt_exist");
      res.status(404).send();
    }
  });
});

router.patch("/updateUserDetails", jsonParser, async (req, res) => {
  const data: UserDetails = req.body;
  const token = req.headers["authorization"] as string;
  console.log("PATCH_USER", data);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    console.log("EMAIL_DECOED", email);
    const update = { ...data };
    User.findOneAndUpdate(filter, update).then((user) => {
      if (user) {
        res.status(200).send({ message: "User details updated" });
      } else {
        res.status(404).send({ message: "Error updating user details" });
      }
    });
  } catch (err) {
    console.log("Incorrect JWT", err);
    res.status(500).send({
      message: "Error during JWT token validation process",
      error: err,
    });
  }
});

router.get("/getUserDetails", async (req, res) => {
  const token = req.headers["authorization"] as string;
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const email = (decoded as TokenInterface).userEmail;

  User.findOne({ email }, [
    "email",
    "nickname",
    "fullName",
    "dob",
    "avatar",
    "steamID32",
    "dota",
    "purchases",
    "rewards",
  ]).then((user) => {
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send();
    }
  });
});

router.get("/getUserCurrency", async (req, res) => {
  const token = req.headers["authorization"] as string;
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const email = (decoded as TokenInterface).userEmail;

  User.findOne({ email }, ["perks", "relics"]).then((user) => {
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send();
    }
  });
});

router.get("/linkSteam/:steamID32", async (req, res) => {
  const { steamID32 } = req.params;
  const token = req.headers["authorization"] as string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    const email = (decoded as TokenInterface).userEmail;

    const isDuplicateSteamID = await User.findOne({ steamID32 });

    if (isDuplicateSteamID) {
      res.status(409).send({
        message: `Your steamID is already in use.`,
      });
    } else {
      // Introduce logic to check publich match history. If disabled then return 401 and ask to enable it.

      await axios.post(`${openDotaApi}/players/${steamID32}/refresh`);
      const updatedUserInfo = await axios.get(
        `${openDotaApi}/players/${steamID32}`
      );
      const isPublicMatchHistory = !updatedUserInfo.data.profile.fh_unavailable;
      if (isPublicMatchHistory) {
        const recentMatches = await axios.get(
          `${openDotaApi}/players/${steamID32}/recentMatches`
        );

        const latestGameTime: number = recentMatches.data[0].start_time;
        const latestGameId: number = recentMatches.data[0].match_id;
        const dota = { latestGameId, latestGameTime };

        User.findOneAndUpdate({ email }, { steamID32, dota }).then((doc) => {
          if (doc) {
            res.status(200).send({
              message: "SteamID successfully linked",
              latestGameId: latestGameId,
            });
          } else {
            res.status(400).send({ message: "Error with SteamID linking" });
          }
        });
      } else {
        res.status(406).send({
          message: `Match history is not public`,
        });
      }
    }
  } catch (err) {
    res.status(500).send({
      message: "Error during JWT token validation process",
      error: err,
    });
  }
});

router.get("/getUserStats", async (req, res) => {
  const token = req.headers["authorization"] as string;
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const email = (decoded as TokenInterface).userEmail;

  const userData = await User.findOne({ email });
  const league = await League.findOne({});
  if (userData != null && league != null) {
    const { dota, steamID32 } = userData;

    const { startDate, endDate } = league;

    const recentMatches: { data: MatchData[] } = await axios.get(
      `${openDotaApi}/players/${steamID32}/matches?significant=0&limit=100&project=hero_damage&project=hero_healing&project=kills&project=deaths&project=assists&project=start_time&project=duration&project=game_mode&project=hero_id&project=last_hits`
    );

    // const recentMatches: { data: MatchData[] } = dummyRecentMatches;

    const isPremiumActive = userData.premium.isPremiumActive;
    const premiumGamesLeft = userData.premium.premiumGamesLeft;

    const hasBonusMatch = isPremiumActive && premiumGamesLeft > 0;

    const fromThisGame = recentMatches.data.findIndex(
      (match) => match.match_id === dota.latestGameId
    );

    // const fromThisGame = recentMatches.data.findIndex(
    //   (match) => match.match_id === 7523323314
    // );

    const newGames = recentMatches.data.slice(0, fromThisGame);
    if (newGames.length > 0) {
      //DO CALCULATION HERE
      const { parsedMatches, newPoints } = calculation(
        newGames,
        hasBonusMatch,
        startDate,
        endDate
      );

      if (parsedMatches.length > 0) {
        userData.perks += newPoints;
        userData.relics =
          Math.round((userData.relics + newPoints * 0.001) * 1e12) / 1e12; //to fix flaoting point rounding error on binary level
        dota.significantMatches = parsedMatches
          .concat(dota.significantMatches)
          .slice(0, 30);
        dota.latestGameId = parsedMatches[0].matchId;
        if (isPremiumActive) {
          if (premiumGamesLeft > 1) {
            userData.premium.premiumGamesLeft -= 1;
            userData.premium.isPremiumActive = false;
          } else {
            userData.premium.premiumGamesLeft -= 1;
            userData.premium.hasPremium = false;
            userData.premium.isPremiumActive = false;
          }
        }
        await userData.save();
      }
    }
    const currentPerks = userData.perks;
    const currentRelics = userData.relics;
    const significantMatches = dota.significantMatches;

    res.status(200).send({
      currentPoints: { currentPerks, currentRelics },
      significantMatches,
    });
  } else {
    // User Does Not exist logic
    res.status(500).send({ message: "User not dound" });
  }
});
