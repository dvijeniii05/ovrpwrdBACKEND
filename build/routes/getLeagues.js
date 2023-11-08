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
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
// router.get("/", jsonParser, async (req, res) => {
//   // console.log("leagues", leagues);
//   res.status(200).send(leagues);
// });
exports.router.post("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawLeague = req.body;
    console.log("league", rawLeague);
    League_1.default.findOne({ season: rawLeague.season }).then((league) => {
        if (league) {
            console.log("league_already_exists");
            res.status(422).send({
                message: "League for this season already exists",
            });
        }
        else {
            const newLeague = new League_1.default(rawLeague);
            newLeague.save();
            res.status(200).send({ message: "League created" });
        }
    });
}));
