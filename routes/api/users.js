const express = require("express");
const router = express.Router();

const auth_controller = require("../../controllers/authController");

router.post("/login", auth_controller.login);
//router.post("/login", (req, res) => LoginController.Login.execute(req, res));

router.post("/register", auth_controller.register);

module.exports = router;
