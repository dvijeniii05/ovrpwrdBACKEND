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
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
exports.router.get("/registerUser/:email/:displayName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, displayName } = req.params;
    User_1.default.findOne({ email }).then((user) => {
        if (user) {
            console.log("user_already_exists");
            res.status(400).send("User is already registered");
        }
        else {
            const newUser = new User_1.default({
                email,
                displayName,
            });
            newUser.save();
            console.log("success");
            res.status(200).send({ message: "Registration Success" });
        }
    });
}));
exports.router.get("/linkSteam/:email/:steamID32", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, steamID32 } = req.params;
    User_1.default.findOneAndUpdate({ email }, { steamID32 }).then((doc) => {
        if (doc) {
            res.status(200).send({ message: "SteamID successfully linked" });
        }
        else {
            res.status(400).send({ message: "Error with SteamID linking" });
        }
    });
}));
