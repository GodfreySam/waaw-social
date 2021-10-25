const { User } = require("../../models/User.model");
const bcryptjs = require("bcryptjs");
const { compare } = bcryptjs;
const jwt = require('jsonwebtoken');


const loginUser = async (req, res, next) => {
   try {
      let { userInput, password } = req.body;
      if (!userInput || !password) return res.status(400).json({ msg: 'All fields are required' });

      let findUser = await User.findOne({
         $or: [{ username: userInput }, { email: userInput }],
      });

      if (!findUser) return res.status(404).json({ msg: 'Invalid login credentials' });

      if (!findUser.confirmed) return res.status(401).json({ msg: 'Please check your email to confirm your identify' });
      
      let passwordMatch = await compare(password, findUser.password);

      if (!passwordMatch) return res.status(403).json({ msg: 'Password do not match' });

      let token = jwt.sign({findUser}, process.env.JWT_SECRET, { expiresIn: '365d' });
      res.status(200).json({
         msg: 'Login successful',
         token,
         user: {
            ...findUser._doc,
            password: ''
         }
      });
      
      
	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
};

module.exports = loginUser;
