const Validator = require("validator");
const isEmpty = require("lodash.isempty");

module.exports = function validateLogin(data) {
  const errors = {};
  const email = !isEmpty(data.email) ? data.email : "";
  const password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(email)) {
    errors.email = "Wrong email address";
  }
  if (!Validator.isLength(password, { min: 6, max: 15 })) {
    errors.password = "Password should be minimum 6 characters long";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
