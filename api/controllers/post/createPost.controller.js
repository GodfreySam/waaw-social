let { Post } = require('../../models/Post.model');
const cloudinary = require("cloudinary").v2;
const cloudinarySetup = require("../../config/cloudinarySetup");

const createNewPost = async (req, res, next) => {
   let { title, description, mediaType } = req.body;

   if (!title || !description || !mediaType) return res.status(400).json({ msg: 'All fields are required' });
   // if (req.file.mimetype != 'image/*' || req.file.mimetype != 'video/*') return res.status(400).json({ msg: 'Only images and videos files allowed' });

    await cloudinarySetup();

   const uploadedMedia = await cloudinary.uploader.upload(req.file.path, {resource_type: "auto"});

   const newPost = new Post({
				title,
				description,
            user:req.user._id,
				mediaType,
				media: uploadedMedia.secure_url
			});

   if(!newPost) return res.status(500).json({msg: 'An error occurred'})

   await newPost.save();

   return res.status(201).json({
      msg: 'Post created',
      newPost
   });

   // console.log(req.file)
   // console.log(req.body);
}

module.exports = createNewPost;