const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;
const validateLogin = require("../../validation/login");
const User = require("../../models/user");

module.exports = {
  login: ({ email, password }) => {
    const user = { email, password };
    const { errors, isValid } = validateLogin(user);
    if (!isValid) {
      throw new Error("Username or password are incorrect");
      //res.status(400).send(errors);
    } else {
      User.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            errors.email = "User not found";
            throw new Error("User not found");
            //res.status(400).send(errors);
          } else {
            bcrypt.compare(req.body.password, user.password).then(isMatch => {
              if (isMatch) {
                const payload = {
                  id: user._id,
                  name: user.name
                };
                jwt.sign(
                  payload,
                  secret,
                  { expiresIn: 36000 },
                  (err, token) => {
                    if (err) {
                      throw new Error("Error signing token");
                    }
                    return {
                      success: true,
                      token: `Bearer ${token}`
                    };
                  }
                );
              }
            });
          }
        })
        .catch(err => {
          errors.password = "Network error!";
          throw new Error("Network error!");
          //res.status(400).send(errors);
        });
    }
  }
};
