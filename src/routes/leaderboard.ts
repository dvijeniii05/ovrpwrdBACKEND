import express from "express";
import User from "../models/User";

export const router = express.Router();

router.get("/", async (req, res) => {
  User.find({}, ["nickname", "perks", "avatar"])
    .sort({ perks: -1 })
    .then((allUsers) => {
      res.status(200).send(allUsers);
    });
});
