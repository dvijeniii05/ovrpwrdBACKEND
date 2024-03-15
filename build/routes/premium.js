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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const flat_1 = require("flat");
const User_1 = __importDefault(require("../models/User"));
const body_parser_1 = __importDefault(require("body-parser"));
const axios_1 = __importDefault(require("axios"));
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
// router.patch("/purchasePremium", async (req, res) => {
//   const token = req.headers["authorization"] as string;
//   console.log("Purchase_Premium");
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//     const email = (decoded as TokenInterface).userEmail;
//     const filter = { email };
//     const currentDateTime = new Date().getTime();
//     const userData = await User.findOne(filter);
//     if (userData != null) {
//       console.log("TIME_OF_PURCHASE", currentDateTime);
//       userData.premium.premiumGamesLeft += 10;
//       userData.premium.lastPurchased = currentDateTime;
//       userData.save();
//       res.status(200).send({ message: "Premium Status updated" });
//     } else {
//       res.status(404).send({ message: "Error updating Premium Status" });
//     }
//   } catch (err) {
//     console.log("Incorrect JWT", err);
//     res.status(500).send({
//       message: "Error during JWT token validation process",
//       error: err,
//     });
//   }
// });
exports.router.post("/updatePremium", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    const { hasActiveEntitelement, isIos, entitlements } = req.body;
    console.log("Update_Premium");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        const filter = { email };
        const userData = yield User_1.default.findOne(filter);
        const dynamicEntitlementString = isIos ? "premium" : "premium_android";
        console.log("UPDATE_PREMIUM_CHECK", userData === null || userData === void 0 ? void 0 : userData.premium.lastPurchased, hasActiveEntitelement, isIos);
        if (userData != null) {
            const updatedUserInfo = yield axios_1.default.get(`https://api.revenuecat.com/v1/subscribers/${userData.revUserId}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REV_CAT_KEY}`,
                },
            });
            const lastActiveProductId = updatedUserInfo.data.subscriber.entitlements[dynamicEntitlementString]
                .product_identifier;
            const shouldRefund = updatedUserInfo.data.subscriber.subscriptions[lastActiveProductId]
                .refunded_at !== null;
            const latestRefundTransactionId = updatedUserInfo.data.subscriber.subscriptions[lastActiveProductId]
                .store_transaction_id;
            console.log("RESPONSE_FROM_REV_CAT", lastActiveProductId);
            console.log("IS_REFUNDED?", shouldRefund);
            //NEW LOGIC INSIDE HERE
            userData.premium.hasPremium = hasActiveEntitelement;
            if (shouldRefund &&
                latestRefundTransactionId !== userData.premium.refundTransactionId) {
                const isMonthlySub = !lastActiveProductId.includes("1y") ||
                    !lastActiveProductId.includes("yearly");
                userData.premium.premiumGamesLeft -= isMonthlySub ? 10 : 120;
                userData.premium.refundTransactionId = latestRefundTransactionId;
                yield userData.save();
                res.status(200).send({ message: "Successful refund" });
            }
            else {
                if (hasActiveEntitelement) {
                    const dynamicCustomEntitelment = isIos
                        ? entitlements.active.premium
                        : entitlements.active.premium_android;
                    const isMonthlySub = !dynamicCustomEntitelment.productIdentifier.includes("1y") ||
                        !dynamicCustomEntitelment.productIdentifier.includes("yearly");
                    console.log("IS_MONTHLY_SUBSCRIPTION?", isMonthlySub);
                    const newPurchaseTime = dynamicCustomEntitelment.latestPurchaseDateMillis;
                    if (userData.premium.lastPurchased < newPurchaseTime) {
                        console.log("Need_to_add_10");
                        userData.premium.premiumGamesLeft += isMonthlySub ? 10 : 120;
                        userData.premium.lastPurchased = newPurchaseTime;
                    }
                }
                yield userData.save();
                res.status(200).send({ message: "Premium Status updated" });
            }
        }
        else {
            res.status(404).send({
                message: "User not found",
            });
        }
    }
    catch (err) {
        console.log("Incorrect JWT", err);
        res.status(500).send({
            message: "Error while updating premium status",
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
