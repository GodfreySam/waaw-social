const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let commentSchema = new Schema(
	{
		content: String,
      postId: mongoose.Types.ObjectId,
      postUserId: mongoose.Types.ObjectId,
      replies: [{
         mongoose.Types.ObjectId,
         ref: 'user'
      }],
      likes: [{
         mongoose.Types.ObjectId,
         ref: 'user'
      }],
      user: {
         mongoose.Types.ObjectId,
         ref: 'user'
      }
	},
	{ timestamps: true },
);

module.exports = {
	Comment: model("comment", commentSchema),
};
