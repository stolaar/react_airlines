const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");

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
      bcrypt.compare(req.body.password, user.password, (err, logRes) => {
        if (err) {
          res.status(400).send(err);
        }
        res.send(logRes);
      });
    })
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  res.status(200).send("Test");
});

module.exports = router;
