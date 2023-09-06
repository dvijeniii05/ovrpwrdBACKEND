import express from "express";
import bodyParser from "body-parser";
import User from "../models/User";
import axios from "axios";
import jwt from "jsonwebtoken";
import { openDotaApi } from "./getRecentMatches";
import { calculation } from "../utils/calculationEngine";

export const router = express.Router();
interface UserDataProps {
  startingGameID: string;
  steamID32: string;
  points: number;
}

export interface MatchData {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  hero_id: number;
  game_mode: number;
  lobby_type: number;
  hero_damage: number;
  hero_healing: number;
  kills: number;
  deaths: number;
  assists: number;
  start_time: number;
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
      });
      newUser.save();
      console.log(
        "New user registered",
        email,
        fullName,
        nickname,
        dob,
        gender,
        country
      );
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
    const update = { ...data };
    const userDoc = await User.findOneAndUpdate(filter, update);
    if (userDoc) {
      res.status(200).send({ message: "User details updated" });
    } else {
      res.status(404).send({ message: "Error updating user details" });
    }
  } catch (err) {
    console.log("Incorrect JWT", err);
    res
      .status(500)
      .send({ message: "Error during the update process", error: err });
  }
});

router.get("/getUserStats/:email", async (req, res) => {
  const { email } = req.params;

  const userData = await User.findOne({ email });
  if (userData != null) {
    const { startingGameID, steamID32 } = userData;
    const recentMatches: { data: MatchData[] } = await axios.get(
      `${openDotaApi}/players/${steamID32}/matches?significant=0&limit=100&project=hero_damage&project=hero_healing&project=kills&project=deaths&project=assists&project=start_time&project=duration&project=game_mode&project=hero_id`
    );
    const fromThisGame = recentMatches.data.findIndex(
      (match) => match.match_id === Number("7225084321")
    );
    const newGames = recentMatches.data.slice(0, fromThisGame);
    if (newGames.length > 0) {
      //DO CALCULATION HERE
      const { parsedMatches, newPoints } = calculation(newGames);
      userData.perks += newPoints;
      userData.relics += newPoints * 0.001;
      userData.lastTenMatches = parsedMatches;
      await userData.save();
    }
    const currentPerks = userData.perks;
    const currentRelics = userData.relics;
    const lastTenMatches = userData.lastTenMatches;

    res
      .status(200)
      .send({ currentPoints: { currentPerks, currentRelics }, lastTenMatches });
  } else {
    // User Does Not exist logic
    res.status(500).send({ message: "User not dound" });
  }
});

router.get("/linkSteam/:email/:steamID32", async (req, res) => {
  const { email, steamID32 } = req.params;

  const recentMatches = await axios.get(
    `${openDotaApi}/players/${steamID32}/recentMatches`
  );

  // console.log(recentMatches);

  const startingGameTime: number = recentMatches.data[0].start_time;
  const startingGameID: number = recentMatches.data[0].match_id;

  User.findOneAndUpdate(
    { email },
    { steamID32, startingGameID, startingGameTime }
  ).then((doc) => {
    if (doc) {
      res.status(200).send({ message: "SteamID successfully linked" });
    } else {
      res.status(400).send({ message: "Error with SteamID linking" });
    }
  });
});
