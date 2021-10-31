const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let userSchema = new Schema(
	{
		firstname: String,
		lastname: String,
		username: String,
		email: String,
		password: String,
		gender: String,
		avatar: String,
		avatarSmall: String,
		secretToken: String,
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

module.exports = {
	User: model("user", userSchema),
};
