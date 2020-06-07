const express = require("express");
const router = express.Router();
const passport = require("../passport/passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/login", passport.authenticate("local"), (req, res) => {
  if (req.user) {
    res.status(200).send({ authenticated: true, user: req.user.id });
    res.redirect("/characters");
  } else {
    res.status(401).send({ authenticated: false, user: null });
  }
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  User.find({ email }, (err, results) => {
    if (!results.length) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        const user = new User({ email, password: hash, sortPreference: "" });
        user.save((err, results) => {
          if (!err) {
            return res
              .status(200)
              .send({ success: true, message: "User registered successfully" });
          } else {
            return res
              .status(400)
              .send({ success: false, message: "Internal error occurred" });
          }
        });
      });
    } else {
      return res
        .status(400)
        .send({ success: false, message: "User is already registered" });
    }
  });
});

router.get("/current_user", (req, res) => {
  if (req.user) {
    res.status(200).send({ id: req.user.id });
  } else {
    res.status(401).send({ id: null });
  }
});

module.exports = router;
