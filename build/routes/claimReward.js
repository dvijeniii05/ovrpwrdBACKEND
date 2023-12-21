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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
exports.router.patch("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reward, claimId } = req.body;
    const token = req.headers["authorization"];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        const fullDate = new Date();
        const today = fullDate.getDate();
        const userData = yield User_1.default.findOne({ email });
        if (userData != null) {
            switch (claimId) {
                case "left":
                    userData.rewards.leftGiftClaimedDate = today;
                    break;
                case "mid":
                    userData.rewards.midGiftClaimedDate = today;
                    break;
                case "right":
                    userData.rewards.rightGiftClaimedDate = today;
                    break;
                default:
                    break;
            }
            userData.perks += reward;
            userData.relics =
                Math.round((userData.relics + reward * 0.001) * 1e12) / 1e12;
            yield userData.save();
            res.status(200).send();
        }
        else {
            // User Does Not exist logic
            res.status(404).send({ message: "Error with your user" });
        }
    }
    catch (_a) {
        res.status(500).send({ message: "Something went wrong" });
    }
}));
exports.router.get("/getRewardsStatus", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const email = decoded.userEmail;
    User_1.default.findOne({ email }, ["rewards"]).then((user) => {
        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(404).send();
        }
    });
}));
