import express from "express";
import jwt from "jsonwebtoken";
import { flatten } from "flat";
import { TokenInterface } from "./userAuth";
import User from "../models/User";
import bodyParser from "body-parser";

export const router = express.Router();

export interface PremiumRequestProps {
  isPremiumActive?: boolean;
}

const jsonParser = bodyParser.json();

router.patch("/purchasePremium", async (req, res) => {
  const token = req.headers["authorization"] as string;
  console.log("Purchase_Premium");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    const currentDateTime = new Date().getTime();

    const userData = await User.findOne(filter);
    if (userData != null) {
      console.log("TIME_OF_PURCHASE", currentDateTime);
      userData.premium.premiumGamesLeft += 10;
      userData.premium.lastPurchased = currentDateTime;
      userData.save();
      res.status(200).send({ message: "Premium Status updated" });
    } else {
      res.status(404).send({ message: "Error updating Premium Status" });
    }
  } catch (err) {
    console.log("Incorrect JWT", err);
    res.status(500).send({
      message: "Error during JWT token validation process",
      error: err,
    });
  }
});

router.post("/updatePremium", jsonParser, async (req, res) => {
  const token = req.headers["authorization"] as string;
  const { newPurchaseTime, cancelationTime } = req.body;
  console.log("Update_Premium");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    const userData = await User.findOne(filter);
    console.log(
      "UPDATE_PREMIUM_CHECK",
      userData?.premium.lastPurchased,
      newPurchaseTime,
      cancelationTime
    );
    if (userData != null) {
      const canceledAfterSevenDays =
        cancelationTime - userData?.premium.lastPurchased < 604800;

      if (canceledAfterSevenDays) {
        console.log("Canceled_After_Seven_Days", cancelationTime);
        userData.premium.premiumGamesLeft -= 10;
        userData.premium.lastPurchased = cancelationTime;
        await userData.save();
      } else {
        if (userData?.premium.lastPurchased < newPurchaseTime) {
          console.log("Need_to_add_10");
          userData.premium.premiumGamesLeft += 10;
          userData.premium.lastPurchased = newPurchaseTime;
          await userData.save();
        }
      }
    }
    res.status(200).send({ message: "Premium Status updated" });
  } catch (err) {
    console.log("Incorrect JWT", err);
    res.status(500).send({
      message: "Error during JWT token validation process",
      error: err,
    });
  }
});

router.patch("/activatePremium", async (req, res) => {
  const token = req.headers["authorization"] as string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    User.findOneAndUpdate(
      filter,
      flatten({
        premium: { isPremiumActive: true },
      })
    ).then((user) => {
      if (user) {
        res
          .status(200)
          .send({ message: "Premium is Activated for next match" });
      } else {
        res.status(404).send({ message: "Error activating Premium" });
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

router.get("/getPremiumStatus", async (req, res) => {
  const token = req.headers["authorization"] as string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    User.findOne({ email }, ["premium"]).then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send();
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
