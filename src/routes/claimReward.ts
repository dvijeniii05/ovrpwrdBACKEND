import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import { TokenInterface } from "./userAuth";
import User from "../models/User";

export const router = express.Router();

const jsonParser = bodyParser.json();

router.patch("/", jsonParser, async (req, res) => {
  const { reward, claimId } = req.body;
  const token = req.headers["authorization"] as string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const fullDate = new Date();
    const today = fullDate.getDate();

    const userData = await User.findOne({ email });

    if (userData != null) {
      switch (claimId) {
        case "left":
          userData.rewards.leftGiftClaimedDate = today;
          break;
        case "mid":
          userData.rewards.midGiftClaimedDate = today;
          break;
        case "right":
          userData.rewards.rightGiftClaimedDate = today;
          break;
        default:
          break;
      }
      userData.perks += reward;
      userData.relics =
        Math.round((userData.relics + reward * 0.001) * 1e12) / 1e12;

      await userData.save();
      res.status(200).send();
    } else {
      // User Does Not exist logic
      res.status(404).send({ message: "Error with your user" });
    }
  } catch {
    res.status(500).send({ message: "Something went wrong" });
  }
});

router.get("/getRewardsStatus", jsonParser, async (req, res) => {
  const token = req.headers["authorization"] as string;
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const email = (decoded as TokenInterface).userEmail;

  User.findOne({ email }, ["rewards"]).then((user) => {
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send();
    }
  });
});
