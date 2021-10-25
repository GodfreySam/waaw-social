const express = require("express");
const router = express.Router();
const registerUser = require('../../controllers/auth/register.controller');
const loginUser = require("../../controllers/auth/login.controller");
const confirmEmail = require("../../controllers/auth/confirmEmail.controller");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/confirm-user", confirmEmail);


module.exports = router;
