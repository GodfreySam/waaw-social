const express = require("express");
const router = express.Router();
const profilePicUpload = require('../../controllers/user/profilePic.controller');
const upload = require('../../config/multerSetup');

const verify = require('../../middleware/authjwt');

router.post("/update-avatar", verify, upload.single('profilePic'), profilePicUpload);

module.exports = router;
