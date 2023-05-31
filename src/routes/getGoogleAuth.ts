import express from "express";
import passport from "passport";
import User from "../models/User";

export const router = express.Router();

export interface UserProps {
  displayName: string;
  name: { familyName: string; givenName: string };
  emails: Array<{ value: string; verified: boolean }>;
  photos: Array<{ value: string }>;
}

router.get("/google", passport.authenticate("google"), (req, res) =>
  res.send(200)
);
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "https://ovrpwrd-backend.herokuapp.com/api/auth/success",
    failureRedirect: "https://ovrpwrd-backend.herokuapp.com/api/auth/failure",
  }),
  (req, res) => res.send(200)
);

router.get("/success", (req, res) => {
  const userData = req.user as UserProps;
  // console.log("req is there", userData);
  User.findOne({ email: userData.emails[0].value }).then((user) => {
    if (user) {
      res.render("googleAuthFailed", {
        message: "Email in use",
      });
    } else {
      const newUser = new User({
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

router.get("/failure", (req, res) => {
  console.log(req.user);
});
