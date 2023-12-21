"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    isFullyOnboarded: {
        type: Boolean,
        required: true,
        default: false,
    },
    nickname: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
    steamID32: {
        type: String,
        required: false,
    },
    perks: {
        type: Number,
        required: true,
        default: 0,
    },
    relics: {
        type: Number,
        required: true,
        default: 0,
    },
    dota: {
        type: {
            latestGameId: {
                type: Number,
                required: false,
            },
            latestGameTime: {
                type: String,
                required: false,
            },
            significantMatches: {
                type: Array,
                required: true,
            },
        },
        required: true,
    },
    purchases: {
        type: Array,
        required: true,
    },
    rewards: {
        type: {
            leftGiftClaimedDate: {
                type: Number,
                required: true,
                default: 0,
            },
            midGiftClaimedDate: {
                type: Number,
                required: true,
                default: 0,
            },
            rightGiftClaimedDate: {
                type: Number,
                required: true,
                default: 0,
            },
        },
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model("User", UserSchema);
