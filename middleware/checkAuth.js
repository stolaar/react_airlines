const jwt = require("jsonwebtoken");
const secret = require("../config/keys").secretOrKey;
const BaseController = require("../controllers/BaseController/BaseController");
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = await jwt.verify(token, secret);
    const userData = decoded;
    next();
  } catch (e) {
    return new BaseController(req, res).unauthorized();
  }
};
