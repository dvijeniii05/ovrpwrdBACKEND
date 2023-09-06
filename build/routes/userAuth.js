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
    //NEED TO ADD JWT token for registration
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
            });
            newUser.save();
            console.log("New user registered", email, fullName, nickname, dob, gender, country);
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
        const update = Object.assign({}, data);
        const userDoc = yield User_1.default.findOneAndUpdate(filter, update);
        if (userDoc) {
            res.status(200).send({ message: "User details updated" });
        }
        else {
            res.status(500).send({ message: "Error updating user details" });
        }
    }
    catch (err) {
        console.log("Incorrect JWT", err);
        res.status(404).send({ message: "Error verifying JWT", error: err });
    }
}));
exports.router.get("/getUserStats/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const userData = yield User_1.default.findOne({ email });
    if (userData != null) {
        const { startingGameID, steamID32 } = userData;
        const recentMatches = yield axios_1.default.get(`${getRecentMatches_1.openDotaApi}/players/${steamID32}/matches?significant=0&limit=100&project=hero_damage&project=hero_healing&project=kills&project=deaths&project=assists&project=start_time&project=duration&project=game_mode&project=hero_id`);
        const fromThisGame = recentMatches.data.findIndex((match) => match.match_id === Number("7225084321"));
        const newGames = recentMatches.data.slice(0, fromThisGame);
        if (newGames.length > 0) {
            //DO CALCULATION HERE
            const { parsedMatches, newPoints } = (0, calculationEngine_1.calculation)(newGames);
            userData.perks += newPoints;
            userData.relics += newPoints * 0.001;
            userData.lastTenMatches = parsedMatches;
            yield userData.save();
        }
        const currentPerks = userData.perks;
        const currentRelics = userData.relics;
        const lastTenMatches = userData.lastTenMatches;
        res
            .status(200)
            .send({ currentPoints: { currentPerks, currentRelics }, lastTenMatches });
    }
    else {
        // User Does Not exist logic
        res.status(500).send({ message: "User not dound" });
    }
}));
exports.router.get("/linkSteam/:email/:steamID32", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, steamID32 } = req.params;
    const recentMatches = yield axios_1.default.get(`${getRecentMatches_1.openDotaApi}/players/${steamID32}/recentMatches`);
    // console.log(recentMatches);
    const startingGameTime = recentMatches.data[0].start_time;
    const startingGameID = recentMatches.data[0].match_id;
    User_1.default.findOneAndUpdate({ email }, { steamID32, startingGameID, startingGameTime }).then((doc) => {
        if (doc) {
            res.status(200).send({ message: "SteamID successfully linked" });
        }
        else {
            res.status(400).send({ message: "Error with SteamID linking" });
        }
    });
}));
