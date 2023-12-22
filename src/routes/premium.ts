import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import { flatten } from "flat";
import { TokenInterface } from "./userAuth";
import User from "../models/User";

export const router = express.Router();

const jsonParser = bodyParser.json();

export interface PremiumRequestProps {
  hasPremium?: boolean;
  isPremiumActive?: boolean;
}

router.patch("/purchasePremium", async (req, res) => {
  const token = req.headers["authorization"] as string;
  console.log("Purchase_Premium");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    User.findOneAndUpdate(
      filter,
      flatten({
        premium: {
          hasPremium: true,
          premiumGamesLeft: 10,
        },
      })
    ).then((user) => {
      if (user) {
        res.status(200).send({ message: "Premium Status updated" });
      } else {
        res.status(404).send({ message: "Error updating Premium Status" });
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
