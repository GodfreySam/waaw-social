const express = require("express");
const router = express.Router();
const registerUser = require('../../controllers/auth/register.controller');
const loginUser = require("../../controllers/auth/login.controller");
const verifyUser = require("../../controllers/auth/verify.controller");
const resetPassword = require("../../controllers/auth/reset.controller");
const effectResetPassword = require("../../controllers/auth/effectReset.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.post("/reset", resetPassword);
router.post("/reset-password", effectResetPassword);

module.exports = router;
