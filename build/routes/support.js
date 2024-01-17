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
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const telegraf_1 = require("telegraf");
const App_1 = require("../App");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
// THIS TO BE MOVED TO PRODUCT PURCAHSING CALL
const bot = new telegraf_1.Telegraf("6942613564:AAHw2Ck2UUnPi7WZDZgy8IrqNLJWaIIXTfE");
exports.router.post("/reportNickname", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nickname } = req.body;
    console.log("NICK_TO_REPORT", nickname);
    try {
        bot.telegram.sendMessage(App_1.supportChatId, `Reported nickname: ${nickname}`);
        console.log("NICK_TO_REPORT", nickname);
        res.status(200).send();
    }
    catch (_a) {
        res.status(500).send();
    }
}));
exports.router.get("/deleteAccount", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    console.log("TOKEN", token);
    const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const email = decoded.userEmail;
    try {
        bot.telegram.sendMessage(App_1.accountDeletionChatId, `Delete Account: ${email}`);
        console.log("Account to Delete", email);
        res.status(200).send();
    }
    catch (_b) {
        res.status(500).send();
    }
}));
