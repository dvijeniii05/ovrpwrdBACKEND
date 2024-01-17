import express from "express";
import bodyParser from "body-parser";
import League from "../models/League";
import User from "../models/User";

export const router = express.Router();

const jsonParser = bodyParser.json();

router.get("/", jsonParser, async (req, res) => {
  League.find({}).then((allLeagues) => {
    res.status(200).send(allLeagues);
  });
});

router.get("/userCountOnLeagues", async (req, res) => {
  const userCount = {
    legendary: 0,
    mythical: 0,
    immortal: 0,
  };
  const legendary = 3000; //These values must be changed to match numbers in the Leagues API
  const mythical = 6000;
  const immortal = 9000;

  const allUsers = await User.find({}, ["perks"]);

  allUsers.map((user) => {
    if (user.perks > legendary && user.perks <= mythical) {
      userCount.legendary += 1;
    } else if (user.perks > mythical && user.perks <= immortal) {
      userCount.mythical += 1;
    } else if (user.perks >= immortal) {
      userCount.immortal += 1;
    }
  });
  res.status(200).send(userCount);
});

router.patch("/", jsonParser, async (req, res) => {
  const leagueSecret = req.headers["authorization"] as string;
  if (leagueSecret === process.env.LEAGUE_SECRET) {
    // const newLEague = new League({ ...req.body });
    // newLEague.save();
    // res.status(200).send({
    //   message: "League created",
    // });
    const rawLeague = req.body;
    const filter = { leagueName: rawLeague.leagueName };
    try {
      const validateBody = await League.validate(rawLeague);
      League.findOneAndReplace(filter, rawLeague).then((league) => {
        if (league) {
          res.status(200).send({
            message: "League details updated successfully",
          });
        } else {
          console.log("NO_NAME", filter);
          res
            .status(404)
            .send({ message: "League with a given name not found" });
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send({ message: "Access restricted" });
  }
});
