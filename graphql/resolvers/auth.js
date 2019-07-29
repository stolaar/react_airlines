const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;
const validateLogin = require("../../validation/login");
const User = require("../../models/user");
module.exports = {
  login: async ({ email, password }) => {
    const userData = { email, password };
    const { errors, isValid } = validateLogin(userData);
    if (!isValid) {
      throw new Error({ ...errors });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        errors.email = "User not found";
        throw new Error(errors);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };
        let tokenResult;
        const token = jwt.sign(payload, secret, { expiresIn: 36000 });
        return { success: "True", token: `Bearer ${token}` };
        //dd
      }
    } catch (e) {
      throw new Error("Network error!");
    }
  },
  getUsers: () => {
    return { success: "True" };
  }
};
