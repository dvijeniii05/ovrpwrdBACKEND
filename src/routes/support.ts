import bodyParser from "body-parser";
import express from "express";
import { Telegraf } from "telegraf";
import { accountDeletionChatId, supportChatId } from "../App";
import jwt from "jsonwebtoken";
import { TokenInterface } from "./userAuth";

export const router = express.Router();

const jsonParser = bodyParser.json();

// THIS TO BE MOVED TO PRODUCT PURCAHSING CALL
const bot = new Telegraf("6942613564:AAHw2Ck2UUnPi7WZDZgy8IrqNLJWaIIXTfE");

router.post("/reportNickname", jsonParser, async (req, res) => {
  const { nickname } = req.body;
  console.log("NICK_TO_REPORT", nickname);
  try {
    bot.telegram.sendMessage(supportChatId, `Reported nickname: ${nickname}`);
    console.log("NICK_TO_REPORT", nickname);
    res.status(200).send();
  } catch {
    res.status(500).send();
  }
});

router.get("/deleteAccount", async (req, res) => {
  const token = req.headers["authorization"] as string;
  console.log("TOKEN", token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const email = (decoded as TokenInterface).userEmail;
  try {
    bot.telegram.sendMessage(accountDeletionChatId, `Delete Account: ${email}`);
    console.log("Account to Delete", email);
    res.status(200).send();
  } catch {
    res.status(500).send();
  }
});
