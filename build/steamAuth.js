"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportChatId = exports.marketplaceChatId = exports.prodBaseUrl = exports.devBaseUrl = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const node_steam_openid_1 = __importDefault(require("node-steam-openid"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const getRecentMatches_1 = require("./routes/getRecentMatches");
const currentLeagues_1 = require("./routes/currentLeagues");
const userAuth_1 = require("./routes/userAuth");
const leaderboard_1 = require("./routes/leaderboard");
const products_1 = require("./routes/products");
const support_1 = require("./routes/support");
const claimReward_1 = require("./routes/claimReward");
exports.devBaseUrl = `http://localhost:3000`;
exports.prodBaseUrl = `https://ovrpwrd-backend-hmwpa.ondigitalocean.app`;
exports.marketplaceChatId = "-4080601885";
exports.supportChatId = "-4032001652";
const steam = new node_steam_openid_1.default({
    realm: `${exports.prodBaseUrl}`,
    returnUrl: `${exports.prodBaseUrl}/auth/steam/authenticate`,
    apiKey: "D8B16689041256E8528ED5CFD72E1BFC", // Steam API key
});
const app = (0, express_1.default)();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use((0, cors_1.default)());
app.use("/recentMatches", getRecentMatches_1.router);
app.use("/currentLeagues", currentLeagues_1.router);
app.use("/products", products_1.router);
app.use("/userAuth", userAuth_1.router);
app.use("/leaderboard", leaderboard_1.router);
app.use("/support", support_1.router);
app.use("/claimReward", claimReward_1.router);
app.get("/steamid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("REQ", req.query.id);
    res.render("home");
}));
app.get("/auth/steam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const redirectUrl = yield steam.getRedirectUrl();
    console.log("First get hit");
    return res.redirect(redirectUrl);
}));
app.get("/auth/steam/authenticate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const to32converter = "76561197960265728";
    try {
        const user = yield steam.authenticate(req);
        console.log("RESPONSE_FROM_USER_AUTH", user);
        const steamID64 = encodeURIComponent(user.steamid);
        console.log("STEAM_ID", steamID64);
        const steamiID32 = (0, bignumber_js_1.default)(steamID64).minus(to32converter).toString();
        console.log("CONVERTED", steamiID32);
        return res.redirect("/steamid/?id=" + steamiID32);
        //...do something with the data
    }
    catch (error) {
        console.error(error);
    }
}));
app.get("/heroes/:heroId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { heroId } = req.params;
    res.sendFile(`${__dirname}/heroes/${heroId}.png`);
}));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const con = yield mongoose_1.default.connect(process.env.MONGO_URI);
        console.log(con.connection.host);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
});
connectDB();
app.listen(process.env.PORT || 3000, () => console.log("Listenning to PORT:3000", process.env.PORT));
