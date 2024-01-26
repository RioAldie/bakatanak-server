const User = require('../models/user');

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json({ message: 'success', data: user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUser };
