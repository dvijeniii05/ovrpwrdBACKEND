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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const User_1 = __importDefault(require("../models/User"));
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getRecentMatches_1 = require("./getRecentMatches");
const calculationEngine_1 = require("../utils/calculationEngine");
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
exports.router.post("/registerUser", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("BODY_CHECK", req.body);
    const { nickname, email, fullName, dob, gender, country } = req.body;
    User_1.default.findOne({ nickname }).then((user) => {
        if (user) {
            console.log("user_already_exists");
            res.status(422).send({
                message: "Nickname is already taken, please create a new one and try again.",
            });
        }
        else {
            const newUser = new User_1.default({
                email,
                fullName,
                nickname,
                dob,
                gender,
                country,
                dota: {},
            });
            newUser.save();
            const jwtToken = jsonwebtoken_1.default.sign({ userEmail: email }, process.env.JWT_SECRET);
            res.status(200).send({ token: jwtToken });
        }
    });
}));
exports.router.get("/loginUser/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    console.log("BODY_EMAIl", email);
    User_1.default.findOne({ email }).then((user) => {
        if (user) {
            console.log("user_exists");
            const jwtToken = jsonwebtoken_1.default.sign({ userEmail: email }, process.env.JWT_SECRET);
            res
                .status(200)
                .send({ token: jwtToken, isFullyOnboarded: user.isFullyOnboarded });
        }
        else {
            console.log("user_doesnt_exist");
            res.status(404).send();
        }
    });
}));
exports.router.patch("/updateUserDetails", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const token = req.headers["authorization"];
    console.log("PATCH_USER", data);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        const filter = { email };
        console.log("EMAIL_DECOED", email);
        const update = Object.assign({}, data);
        User_1.default.findOneAndUpdate(filter, update).then((user) => {
            if (user) {
                res.status(200).send({ message: "User details updated" });
            }
            else {
                res.status(404).send({ message: "Error updating user details" });
            }
        });
    }
    catch (err) {
        console.log("Incorrect JWT", err);
        res.status(500).send({
            message: "Error during JWT token validation process",
            error: err,
        });
    }
}));
exports.router.get("/getUserDetails", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const email = decoded.userEmail;
    User_1.default.findOne({ email }, [
        "email",
        "nickname",
        "fullName",
        "dob",
        "avatar",
        "steamID32",
        "dota",
        "purchases",
    ]).then((user) => {
        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(404).send();
        }
    });
}));
exports.router.get("/linkSteam/:steamID32", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { steamID32 } = req.params;
    const token = req.headers["authorization"];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        console.log("LUL?", email, steamID32);
        const recentMatches = yield axios_1.default.get(`${getRecentMatches_1.openDotaApi}/players/${steamID32}/recentMatches`);
        const latestGameTime = recentMatches.data[0].start_time;
        const latestGameId = recentMatches.data[0].match_id;
        const dota = { latestGameId, latestGameTime };
        User_1.default.findOneAndUpdate({ email }, { steamID32, dota }).then((doc) => {
            if (doc) {
                res.status(200).send({
                    message: "SteamID successfully linked",
                    latestGameId: latestGameId,
                });
            }
            else {
                res.status(400).send({ message: "Error with SteamID linking" });
            }
        });
    }
    catch (err) {
        res.status(500).send({
            message: "Error during JWT token validation process",
            error: err,
        });
    }
}));
exports.router.get("/getUserStats", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const email = decoded.userEmail;
    const userData = yield User_1.default.findOne({ email });
    if (userData != null) {
        const { dota, steamID32 } = userData;
        console.log("CHeck_In_stats", steamID32, email);
        console.log("IP_CHECK", req.headers["x-forwarded-for"]);
        const recentMatches = yield axios_1.default.get(`${getRecentMatches_1.openDotaApi}/players/${steamID32}/matches?significant=0&limit=100&project=hero_damage&project=hero_healing&project=kills&project=deaths&project=assists&project=start_time&project=duration&project=game_mode&project=hero_id&project=last_hits`);
        // const fromThisGame = recentMatches.data.findIndex(
        //   (match) => match.match_id === 7435042659
        // );
        const fromThisGame = recentMatches.data.findIndex((match) => match.match_id === dota.latestGameId);
        const newGames = recentMatches.data.slice(0, fromThisGame);
        if (newGames.length > 0) {
            //DO CALCULATION HERE
            const { parsedMatches, newPoints } = (0, calculationEngine_1.calculation)(newGames);
            userData.perks += newPoints;
            userData.relics =
                Math.round((userData.relics + newPoints * 0.001) * 1e12) / 1e12; //to fix flaoting point rounding error on binary level
            dota.significantMatches = parsedMatches
                .concat(dota.significantMatches)
                .slice(0, 30);
            dota.latestGameId = parsedMatches[0].matchId;
            yield userData.save();
        }
        const currentPerks = userData.perks;
        const currentRelics = userData.relics;
        const significantMatches = dota.significantMatches;
        res.status(200).send({
            currentPoints: { currentPerks, currentRelics },
            significantMatches,
        });
    }
    else {
        // User Does Not exist logic
        res.status(500).send({ message: "User not dound" });
    }
}));
