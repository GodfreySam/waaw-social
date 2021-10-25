const {User} = require('../../models/User.model');

const confirmEmail = async (req, res, next) => {
   let { secretToken } = req.body;
   console.log(req.body);
   if (!secretToken) return res.status(400).json({ msg: 'please enter secret token' });

   const userWithToken = await User.findOne({ secretToken });
   if (!userWithToken) return res.status(404).json({ msg: "Invalid token," });

   userWithToken.confirmed = true;
   await userWithToken.save();

   return res.status(200).json({ msg: 'User account confirmed' });
}

module.exports = confirmEmail;