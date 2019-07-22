const Validator = require("validator");
const isEmpty = require("lodash.isempty");

module.exports = function validateRegister(data) {
  const errors = {};
  const name = !isEmpty(data.name) ? data.name : "";
  const email = !isEmpty(data.email) ? data.email : "";
  const password = !isEmpty(data.password) ? data.password : "";
  const password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(name, { min: 3, max: 15 })) {
    errors.name = "Name should be at least 3 characters long!";
  }
  if (isEmpty(name)) {
    errors.name = "Name can't be empty";
  }
  if (!Validator.isEmail(email)) {
    errors.email = "Wrong email address";
  }
  if (!Validator.isLength(password, { min: 6, max: 15 })) {
    errors.password = "Password should be minimum 6 characters long";
  }
  if (!Validator.equals(password, password2)) {
    errors.password2 = "Passwords doesn't match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
