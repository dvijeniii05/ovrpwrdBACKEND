import express from "express";
import leagues from "../constants/bronzeLeagues.json";

export const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(leagues);
});
