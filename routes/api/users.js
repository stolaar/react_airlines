const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");

const check_auth = require("../../middleware/checkAuth");

// @route POST /api/users/login
// @desc Checks for the user in database and returns token
// @access Public
router.post("/login", check_auth, (req, res) =>
  new AuthController(req, res).login()
);

// @route POST /api/users/register
// @desc Registers user
// @access Public
router.post("/register", check_auth, (req, res) =>
  new AuthController(req, res).register()
);

module.exports = router;
