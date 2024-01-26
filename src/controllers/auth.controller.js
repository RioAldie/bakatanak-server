const User = require('../models/user');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  try {
    const { email, username, password, age, gender } = req.body;

    // if user exist
    const userExist = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (userExist !== null) {
      return res
        .status(306)
        .json({ message: 'email or username already used' });
    }
    // encrypt the password
    const encryptPassword = bcrypt.hashSync(password, 10);
    console.log(encryptPassword);
    const newUser = await User({
      username,
      email,
      age,
      gender,
      password: encryptPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { signup };
