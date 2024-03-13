import express from "express";
import jwt from "jsonwebtoken";
import { flatten } from "flat";
import { TokenInterface } from "./userAuth";
import User from "../models/User";
import bodyParser from "body-parser";
import axios from "axios";

export const router = express.Router();

export interface PremiumRequestProps {
  isPremiumActive?: boolean;
}

const jsonParser = bodyParser.json();

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

router.post("/updatePremium", jsonParser, async (req, res) => {
  const token = req.headers["authorization"] as string;
  const { hasActiveEntitelement, isIos, entitlements } = req.body;
  console.log("Update_Premium");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    const userData = await User.findOne(filter);

    const dynamicEntitlementString = isIos ? "premium" : "premium_android";

    console.log(
      "UPDATE_PREMIUM_CHECK",
      userData?.premium.lastPurchased,
      hasActiveEntitelement,
      isIos
    );
    if (userData != null) {
      const updatedUserInfo = await axios.get(
        `https://api.revenuecat.com/v1/subscribers/${userData.revUserId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REV_CAT_KEY!}`,
          },
        }
      );
      const lastActiveProductId =
        updatedUserInfo.data.subscriber.entitlements[dynamicEntitlementString]
          .product_identifier;

      const shouldRefund =
        updatedUserInfo.data.subscriber.subscriptions[lastActiveProductId]
          .refunded_at !== null;
      const latestRefundTransactionId =
        updatedUserInfo.data.subscriber.subscriptions[lastActiveProductId]
          .store_transaction_id;

      console.log("RESPONSE_FROM_REV_CAT", lastActiveProductId);

      console.log("IS_REFUNDED?", shouldRefund);

      //NEW LOGIC INSIDE HERE
      userData.premium.hasPremium = hasActiveEntitelement;
      if (
        shouldRefund &&
        latestRefundTransactionId !== userData.premium.refundTransactionId
      ) {
        const isMonthlySub = !lastActiveProductId.includes("1y");
        userData.premium.premiumGamesLeft -= isMonthlySub ? 10 : 120;
        userData.premium.refundTransactionId = latestRefundTransactionId;
        await userData.save();
        res.status(200).send({ message: "Successful refund" });
      } else {
        if (hasActiveEntitelement) {
          const dynamicCustomEntitelment = isIos
            ? entitlements.active.premium
            : entitlements.active.premium_android;

          const isMonthlySub =
            !dynamicCustomEntitelment.productIdentifier.includes("1y");
          console.log("IS_MONTHLY_SUBSCRIPTION?", isMonthlySub);
          const newPurchaseTime =
            dynamicCustomEntitelment.latestPurchaseDateMillis;
          if (userData.premium.lastPurchased < newPurchaseTime) {
            console.log("Need_to_add_10");
            userData.premium.premiumGamesLeft += isMonthlySub ? 10 : 120;
            userData.premium.lastPurchased = newPurchaseTime;
          }
        }
        await userData.save();
        res.status(200).send({ message: "Premium Status updated" });
      }
    } else {
      res.status(404).send({
        message: "User not found",
      });
    }
  } catch (err) {
    console.log("Incorrect JWT", err);
    res.status(500).send({
      message: "Error while updating premium status",
      error: err,
    });
  }
});

router.patch("/activatePremium", async (req, res) => {
  const token = req.headers["authorization"] as string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    const filter = { email };
    User.findOneAndUpdate(
      filter,
      flatten({
        premium: { isPremiumActive: true },
      })
    ).then((user) => {
      if (user) {
        res
          .status(200)
          .send({ message: "Premium is Activated for next match" });
      } else {
        res.status(404).send({ message: "Error activating Premium" });
      }
    });
  } catch (err) {
    console.log("Incorrect JWT", err);
    res.status(500).send({
      message: "Error during JWT token validation process",
      error: err,
    });
  }
});

router.get("/getPremiumStatus", async (req, res) => {
  const token = req.headers["authorization"] as string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;
    User.findOne({ email }, ["premium"]).then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send();
      }
    });
  } catch (err) {
    console.log("Incorrect JWT", err);
    res.status(500).send({
      message: "Error during JWT token validation process",
      error: err,
    });
  }
});
