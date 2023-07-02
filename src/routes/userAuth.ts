import express from "express";
import User from "../models/User";

export const router = express.Router();

export interface UserProps {
  displayName: string;
  emails: Array<{ value: string; verified: boolean }>;
}

router.get("/registerUser/:email/:displayName", async (req, res) => {
  const { email, displayName } = req.params;
  User.findOne({ email }).then((user) => {
    if (user) {
      console.log("user_already_exists");
      res.status(400).send("User is already registered");
    } else {
      const newUser = new User({
        email,
        displayName,
      });
      newUser.save();
      console.log("success");
      res.status(200).send({ message: "Registration Success" });
    }
  });
});

router.get("/linkSteam/:email/:steamID32", async (req, res) => {
  const { email, steamID32 } = req.params;
  User.findOneAndUpdate({ email }, { steamID32 }).then((doc) => {
    if (doc) {
      res.status(200).send({ message: "SteamID successfully linked" });
    } else {
      res.status(400).send({ message: "Error with SteamID linking" });
    }
  });
});
