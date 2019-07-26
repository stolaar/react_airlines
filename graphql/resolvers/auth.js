const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;
const validateRegister = require("../../validation/register");
const validateLogin = require("../../validation/login");

module.exports = {
  login: ({ email, password }) => {
    const user = { email, password };
    const { errors, isValid } = validateLogin(user);
    if (!isValid) {
      //res.status(400).send(errors);
    } else {
      User.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            errors.email = "User not found";
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
                      res
                        .status(500)
                        .json({ error: "Error signing token", raw: err });
                    }
                    return {
                      id: user._id,
                      token: `Bearer ${token}`,
                      exp: 1
                    };
                  }
                );
              }
            });
          }
        })
        .catch(err => {
          errors.password = "Network error!";
          //res.status(400).send(errors);
        });
    }
  }
};
