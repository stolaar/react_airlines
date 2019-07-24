const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;
const validateRegister = require("../../validation/register");
const validateLogin = require("../../validation/login");

const saltRounds = 10;

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) {
    res.status(400).send(errors);
  } else {
    User.findOne({ email: req.body.email })
      .then(result => {
        if (result) {
          errors.email = "User already exist";
          res.status(400).send(errors);
        } else {
          bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
              errors.password = "Wrong password";
              res.status(400).send(errors);
            } else {
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
            }
          });
        }
      })
      .catch(err => console.log(err));
  }
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    res.status(400).send(errors);
  } else {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          errors.email = "User not found";
          res.status(400).send(errors);
        } else {
          bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
              const payload = {
                id: user._id,
                name: user.name
              };
              jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
                if (err) {
                  res
                    .status(500)
                    .json({ error: "Error signing token", raw: err });
                }
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              });
            }
          });
        }
      })
      .catch(err => {
        errors.password = "Network error!";
        res.status(400).send(errors);
      });
  }
});

router.get("/", (req, res) => {
  res.status(200).send("Test");
});

module.exports = router;
