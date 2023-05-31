"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
exports.router.get("/google", passport_1.default.authenticate("google"), (req, res) => res.send(200));
exports.router.get("/google/redirect", passport_1.default.authenticate("google", {
    successRedirect: "http://localhost:3000/api/auth/success",
    failureRedirect: "http://localhost:3000/api/auth/failure",
}), (req, res) => res.send(200));
exports.router.get("/success", (req, res) => {
    const userData = req.user;
    console.log("req is there", userData);
    User_1.default.findOne({ email: userData.emails[0].value }).then((user) => {
        if (user) {
            res.render("googleAuthFailed", {
                message: "Email in use",
            });
        }
        else {
            const newUser = new User_1.default({
                email: userData.emails[0].value,
            });
            newUser.save();
            res.render("googleAuthSuccess", {
                userData: {
                    email: userData.emails[0].value,
                    displayName: userData.displayName,
                },
            });
            // res.status(200).send({ data: userData });
        }
    });
});
exports.router.get("/failure", (req, res) => {
    console.log(req.user);
});
