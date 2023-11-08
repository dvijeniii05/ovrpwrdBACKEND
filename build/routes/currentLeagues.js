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
const League_1 = __importDefault(require("../models/League"));
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
exports.router.get("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    League_1.default.find({}).then((allLeagues) => {
        res.status(200).send(allLeagues);
    });
}));
exports.router.get("/userCountOnLeagues", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCount = {
        legendary: 0,
        mythical: 0,
        immortal: 0,
    };
    const legendary = 3000; //These values must be changed to match numbers in the Leagues API
    const mythical = 6000;
    const immortal = 9000;
    const allUsers = yield User_1.default.find({}, ["perks"]);
    allUsers.map((user) => {
        if (user.perks > legendary && user.perks <= mythical) {
            userCount.legendary += 1;
        }
        else if (user.perks > mythical && user.perks <= immortal) {
            userCount.mythical += 1;
        }
        else if (user.perks >= immortal) {
            userCount.immortal += 1;
        }
    });
    res.status(200).send(userCount);
}));
exports.router.patch("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const leagueSecret = req.headers["authorization"];
    if (leagueSecret === process.env.LEAGUE_SECRET) {
        // const newLEague = new League({ ...req.body });
        // newLEague.save();
        // res.status(200).send({
        //   message: "League created",
        // });
        const rawLeague = req.body;
        const filter = { leagueName: rawLeague.leagueName };
        League_1.default.findOneAndReplace(filter, rawLeague).then((league) => {
            if (league) {
                res.status(200).send({
                    message: "League details updated successfully",
                });
            }
            else {
                res.status(404).send({ message: "League with a given name not found" });
            }
        });
    }
    else {
        res.status(403).send({ message: "Access restricted" });
    }
}));
