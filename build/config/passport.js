"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User_1 = __importDefault(require("../models/User"));
module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: "1071597093913-l4g1oncl17artmjkv3kmbob0fc8e0k6q.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "/auth/google/callback",
    }, function (accessToken, refreshToken, profile, cb) {
        const idCheck = User_1.default.findOne({ googleId: profile.googleId });
        console.log(profile);
    }));
    passport.serializeUser((user, done) => {
        done(null, user);
    });
};
