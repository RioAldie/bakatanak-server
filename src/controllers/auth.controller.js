const { tokenGenerated } = require('../middleware/token');
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

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    // if user doesnt exist

    if (user === null) {
      return res.status(200).json({ message: 'user doesnt exist' });
    }
    const token = {
      _id: user._id,
      role: 'user',
    };
    const passwordChecked = bcrypt.compareSync(
      password,
      user.password
    );

    if (passwordChecked === false) {
      return res.status(401).json({ message: 'wrong password' });
    }

    const tokenCreated = tokenGenerated(token);

    const data = {
      username: user.username,
      token: tokenCreated,
      email: user.email,
    };

    return res.status(200).json({ message: 'success', data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error' });
  }
};

module.exports = { signup, signin };
