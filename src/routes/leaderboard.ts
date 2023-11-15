import express from "express";
import User from "../models/User";

export const router = express.Router();

router.get("/", async (req, res) => {
  console.log("CHECK_HIT?");
  User.find({}, ["nickname", "perks", "avatar"])
    .sort({ perks: -1 })
    .then((allUsers) => {
      res.status(200).send(allUsers);
    });
});
