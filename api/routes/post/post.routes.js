const express = require("express");
const router = express.Router();
const upload = require("../../config/multerSetup");
const verify = require("../../middleware/authjwt");

const createPost = require('../../controllers/post/createPost.controller');

router.post("/", verify, upload.single("postMedia"), createPost);

module.exports = router;
