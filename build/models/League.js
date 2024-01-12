"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LeagueSchema = new mongoose_1.default.Schema({
    season: {
        type: Number,
        required: true,
    },
    leagueName: {
        type: String,
        required: true,
    },
    endDate: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Number,
        required: true,
    },
    pointsMin: {
        type: Number,
        required: true,
    },
    pointsMax: {
        type: Number,
        required: true,
    },
    lastTimeWinner: {
        type: {
            winnerName: { type: String, required: true },
            prizeName: { type: String, required: true },
            prizeValue: { type: Number, required: true },
            prizeImageUrl: { type: String, required: true },
            season: { type: String, required: true },
        },
        required: true,
    },
    sponsorInformation: {
        type: String,
        required: false,
    },
    prizes: {
        type: [
            {
                prizeBrand: { type: String, required: true },
                prizeName: { type: String, required: true },
                prizeDescription: { type: String, required: true },
                imageUrl: { type: String, required: true },
                linkToProduct: { type: String, required: true },
                isPremium: { type: Boolean, required: true },
            },
        ],
        required: true,
    },
});
exports.default = mongoose_1.default.model("League", LeagueSchema);
