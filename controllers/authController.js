const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/keys").secretOrKey;
const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");
const User = require("../models/user");
//const BaseController = require("./BaseClass/BaseClass");

exports.login = async (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).send(errors);
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      errors.email = "User not found";
      return res.status(400).send(errors);
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      const token = await jwt.sign(payload, secret, { expiresIn: 36000 });
      return res.status(200).send({ success: true, token: `Bearer ${token}` });
    }
    if (!isMatch) {
      errors.password = "Invalid password!";
      return res.status(400).send(errors);
    }
  } catch (e) {
    throw new Error("Network error!");
  }
};

exports.register = async (req, res) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) {
    return res.status(400).send(errors);
  }
  try {
    const result = await User.findOne({ email: req.body.email });
    if (result) {
      errors.email = "User already exist";
      return res.status(400).send(errors);
    }
    const hash = await bcrypt.hash(req.body.password, 12);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
    await newUser.save();
    return res.status(200).send({ success: true });
  } catch (e) {
    errors.email = "Network error";
    return res.status(400).send(errors);
  }
};

/*
module.exports = class Login extends BaseController {
  constructor(userRepo) {
    super();
    this._userRepo = userRepo;
  }
  async executeImpl() {
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) {
      return res.status(400).send(errors);
    }
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        errors.email = "User not found";
        return res.status(400).send(errors);
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        };
        const token = await jwt.sign(payload, secret, { expiresIn: 36000 });
        return res
          .status(200)
          .send({ success: true, token: `Bearer ${token}` });
      }
      if (!isMatch) {
        errors.password = "Invalid password!";
        return res.status(400).send(errors);
      }
    } catch (e) {
      throw new Error("Network error!");
    }
  }
}; */
