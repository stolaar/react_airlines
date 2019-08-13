const express = require("express");
const router = express.Router();

const auth_controller = require("../../controllers/authController");

//const check_auth = require('../../middleware/checkAuth'); // @desc Checks if user is authenticated then continue

// @route POST /api/users/login
// @desc Checks for the user in database and returns token
// @access Public
router.post("/login", auth_controller.login);

//router.post("/login", (req, res) => LoginController.Login.execute(req, res));

// @route POST /api/users/register
// @desc Registers user
// @access Public
router.post("/register", auth_controller.register);

module.exports = router;
