const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;

const saltRounds = 10;

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(result => {
      if (result) {
        res.send("User already exist");
      } else {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
          });

          newUser
            .save()
            .then(user => {
              res.send(user);
            })
            .catch(error => console.log(error));
        });
      }
    })
    .catch(err => console.log(err));
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        res.send("No such a user");
      }
      bcrypt.compare(req.body.password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user._id,
            name: user.name
          };
          jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
            if (err) {
              res.status(500).json({ error: "Error signing token", raw: err });
            }
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          });
        }
      });
    })
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  res.status(200).send("Test");
});

module.exports = router;
