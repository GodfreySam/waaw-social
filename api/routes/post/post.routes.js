const express = require("express");
const router = express.Router();
const upload = require("../../config/multerSetup");
const verify = require("../../middleware/authjwt");

const createPost = require("../../controllers/post/createPost.controller");
const getAll = require("../../controllers/post/getAll.controller");

router.route('/').post(verify, upload.single("postMedia"), createPost)
   .get(verify, getAll);
   
module.exports = router;
