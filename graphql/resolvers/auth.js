const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;
<<<<<<< HEAD
const validateLogin = require("../../validation/login");
const User = require("../../models/user");
=======
const validateRegister = require("../../validation/register");
const validateLogin = require("../../validation/login");
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d

module.exports = {
  login: ({ email, password }) => {
    const user = { email, password };
    const { errors, isValid } = validateLogin(user);
    if (!isValid) {
<<<<<<< HEAD
      return {
        response: {},
        errors: { email: errors.email, password: errors.password }
      };
=======
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d
      //res.status(400).send(errors);
    } else {
      User.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            errors.email = "User not found";
<<<<<<< HEAD
            return {
              response: {},
              errors: { email: errors.email, password: errors.password }
            };
=======
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d
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
<<<<<<< HEAD
                      response: { success: true, token: `Bearer ${token}` },
                      errors: {}
=======
                      id: user._id,
                      token: `Bearer ${token}`,
                      exp: 1
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d
                    };
                  }
                );
              }
            });
          }
        })
        .catch(err => {
          errors.password = "Network error!";
<<<<<<< HEAD
          return {
            response: {},
            errors: { password: errors.password }
          };
=======
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d
          //res.status(400).send(errors);
        });
    }
  }
};
