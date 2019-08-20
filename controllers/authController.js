const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");
const User = require("../models/User");
const BaseController = require("./BaseController");
const dotenv = require("dotenv");
dotenv.config();

class AuthController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }

  async login() {
    console.log("Tried");
    const { errors, isValid } = validateLogin(this._req.body);
    if (!isValid) {
      return this.jsonResponse(400, errors);
    }
    try {
      const user = await User.findOne({ email: this._req.body.email });
      if (!user) {
        return this.clientError({ email: "User not found" });
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
        const token = await jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 3600
        });
        return this.ok({ success: true, token: `Bearer ${token}` });
      }
      if (!isMatch) {
        return this.clientError({ password: "Invalid password" });
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
        return this.clientError({ email: "User already exist" });
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
}
module.exports = AuthController;
