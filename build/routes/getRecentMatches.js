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
const axios_1 = __importDefault(require("axios"));
exports.router = express_1.default.Router();
const openDotaApi = "https://api.opendota.com/api";
const stratzRest = "https://api.stratz.com/api/v1";
const startzGraphql = "https://api.stratz.com/graphql";
const startzBearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgzMjc2NjIxMTgiLCJ1bmlxdWVfbmFtZSI6ItCo0LDRgNCwINCR0YPQu9C70LXRgiIsIlN1YmplY3QiOiI1M2U3MjUwOC1hN2U3LTRmYTEtYWY0Yi01ODU0Nzk3MzFjYTIiLCJTdGVhbUlkIjoiMzY3Mzk2MzkwIiwibmJmIjoxNjgzMDUzNzY0LCJleHAiOjE3MTQ1ODk3NjQsImlhdCI6MTY4MzA1Mzc2NCwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.pp80O2TeMJ9HQUsKklXZayLc5mBDANwWZMEccZfgZPY";
exports.router.get("/startingMatchData/:steamID32", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { steamID32 } = req.params;
    // const recentMatches = await axios.get(`${openDotaApi}/players/${steamID32}`);
    const recentMatches = yield axios_1.default.get(`${stratzRest}/Player/${steamID32}/matches`, {
        headers: {
            Authorization: `Bearer ${startzBearerToken}`,
        },
    });
    // console.log("RECENT_MATCHES", recentMatches);
    const startingGameTime = recentMatches.data[0].startDateTime;
    const startingGameID = recentMatches.data[0].id;
    console.log(startingGameID, startingGameTime);
    // All stats will be counted starting from the lastGameID and lastGameTime
    res.status(200).send({ startingGameID, startingGameTime });
}));
exports.router.get("/getMatches/:steamID32/:startDateTime", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { steamID32, startDateTime } = req.params;
    const recentMatches = yield axios_1.default.get(`${stratzRest}/Player/${steamID32}/matches?isParsed=true&startDateTime=${startDateTime}`, {
        headers: { Authorization: `Bearer ${startzBearerToken}` },
    });
    // console.log(recentMatches.data[0]);
    res.status(200).send(recentMatches.data);
}));
exports.router.get("/getCustomMatch/:matchID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matchID } = req.params;
    const customMatchData = yield axios_1.default.get(`${stratzRest}/match/${matchID}`, {
        headers: { Authorization: `Bearer ${startzBearerToken}` },
    });
    const { startDateTime, id } = customMatchData.data;
    res.status(200).send({ startDateTime, id });
}));
