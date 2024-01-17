import express from "express";

export const router = express.Router();

router.get("/", async (req, res) => {
  const currenAppVersion = "1.0"; // has to be in format of
  return res.status(200).send({ appVersion: currenAppVersion });
});
