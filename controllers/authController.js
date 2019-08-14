const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/keys").secretOrKey;
const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");
const User = require("../models/user");
const BaseController = require("./BaseController/BaseController");

module.exports = class AuthController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }

  async login() {
    const { errors, isValid } = validateLogin(this._req.body);
    if (!isValid) {
      return this.jsonResponse(400, errors);
    }
    try {
      const user = await User.findOne({ email: this._req.body.email });
      if (!user) {
        errors.email = "User not found";
        return this.jsonResponse(400, errors);
      }
      const isMatch = await bcrypt.compare(
        this._req.body.password,
        user.password
      );
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        };
        const token = await jwt.sign(payload, secret, { expiresIn: 36000 });
        return this.ok({ success: true, token: `Bearer ${token}` });
      }
      if (!isMatch) {
        errors.password = "Invalid password!";
        return this.jsonResponse(400, errors);
      }
    } catch (err) {
      this.fail(err);
    }
  }

  async register() {
    const { errors, isValid } = validateRegister(this._req.body);
    if (!isValid) {
      return this.jsonResponse(400, errors);
    }
    try {
      const result = await User.findOne({ email: this._req.body.email });
      if (result) {
        errors.email = "User already exist";
        return this.jsonResponse(400, errors);
      }
      const hash = await bcrypt.hash(this._req.body.password, 12);
      const newUser = new User({
        name: this._req.body.name,
        email: this._req.body.email,
        password: hash
      });
      await newUser.save();
      return this.ok({ success: true });
    } catch (err) {
      return this.fail(err);
    }
  }
};
