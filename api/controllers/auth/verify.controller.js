const { User } = require("../../models/User.model");

const verifyUser = async (req, res, next) => {
	try {
		let { token } = req.body;

		// console.log(req.body);
		let user = await User.findOne({ secretToken: token.trim() });

      if (!user) return res.status(400).json({ success: false, msg: "Token not valid" });
      

		user.verified = true;
		await user.save();
		res.status(201).json({
			success: true,
			msg: "User email verified successfully",
		});

	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = verifyUser;
