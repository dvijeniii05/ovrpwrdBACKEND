import { config } from "dotenv";
config();
import express from "express";
import SteamAuth from "node-steam-openid";
import BigNumber from "bignumber.js";
import mongoose from "mongoose";
import cors from "cors";
import { router as getRecentMatches } from "./routes/getRecentMatches";
import { router as getLeagues } from "./routes/getLeagues";
import { router as userAuth } from "./routes/userAuth";

const steam = new SteamAuth({
  realm: "https://ovrpwrd-backend.herokuapp.com/", // Site name displayed to users on logon
  returnUrl: "https://ovrpwrd-backend.herokuapp.com/auth/steam/authenticate", // Your return route
  apiKey: "D8B16689041256E8528ED5CFD72E1BFC", // Steam API key
});

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(cors());

app.use("/recentMatches", getRecentMatches);
app.use("/currentLeagues", getLeagues);
app.use("/userAuth", userAuth);

app.get("/steamid", async (req, res) => {
  console.log("REQ", req.query.id);
  res.render("home");
});

app.get("/auth/steam", async (req, res) => {
  const redirectUrl = await steam.getRedirectUrl();
  console.log("First get hit");
  return res.redirect(redirectUrl);
});

app.get("/auth/steam/authenticate", async (req, res) => {
  const to32converter = "76561197960265728";
  try {
    const user = await steam.authenticate(req);
    console.log("USER", user);

    const steamID64 = encodeURIComponent(user.steamid);
    console.log("STEAM_ID", steamID64);

    const steamiID32 = BigNumber(steamID64).minus(to32converter).toString();
    console.log("CONVERTED", steamiID32);
    return res.redirect("/steamid/?id=" + steamiID32);
    //...do something with the data
  } catch (error) {
    console.error(error);
  }
});

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI!);
    console.log(con.connection.host);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB();

app.listen(process.env.PORT || 3000, () =>
  console.log("Listenning to PORT:3000")
);
