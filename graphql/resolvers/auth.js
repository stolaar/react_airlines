const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;
const validateRegister = require("../../validation/register");
const validateLogin = require("../../validation/login");
const User = require("../../models/user");

module.exports = {
  login: async ({ email, password }) => {
    const userData = { email, password };
    const { errors, isValid } = validateLogin(userData);
    if (!isValid) {
      return { errors: { ...errors } };
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return { errors: { email: "User not found" } };
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };
        const token = jwt.sign(payload, secret, { expiresIn: 36000 });
        return { data: { success: true, token: `Bearer ${token}` } };
        //dd
      }
      if (!isMatch) return { errors: { password: "Wrong password" } };
    } catch (e) {
      throw new Error("Network error!");
    }
  },
  register: async args => {
    const { errors, isValid } = validateRegister(args.UserInput);
    if (!isValid) {
      return { success: false, errors: { ...errors } };
    }
    try {
      const result = await User.findOne({ email: args.UserInput.email });
      if (result) {
        return { success: false, errors: { email: "User already exist" } };
      }
      const hash = await bcrypt.hash(args.UserInput.password, 12);
      const newUser = new User({
        name: args.UserInput.name,
        email: args.UserInput.email,
        password: hash
      });
      await newUser.save();
      return { success: true };
    } catch (e) {
      console.log(e);
    }
  }
};
