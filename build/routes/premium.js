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
const flat_1 = require("flat");
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
exports.router.patch("/purchasePremium", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    console.log("Purchase_Premium");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        const filter = { email };
        User_1.default.findOneAndUpdate(filter, (0, flat_1.flatten)({
            premium: {
                hasPremium: true,
                premiumGamesLeft: 10,
            },
        })).then((user) => {
            if (user) {
                res.status(200).send({ message: "Premium Status updated" });
            }
            else {
                res.status(404).send({ message: "Error updating Premium Status" });
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
exports.router.patch("/activatePremium", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        const filter = { email };
        User_1.default.findOneAndUpdate(filter, (0, flat_1.flatten)({
            premium: { isPremiumActive: true },
        })).then((user) => {
            if (user) {
                res
                    .status(200)
                    .send({ message: "Premium is Activated for next match" });
            }
            else {
                res.status(404).send({ message: "Error activating Premium" });
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
exports.router.get("/getPremiumStatus", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        User_1.default.findOne({ email }, ["premium"]).then((user) => {
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.status(404).send();
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