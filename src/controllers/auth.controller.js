const User = require('../models/user');

const signup = async (req, res) => {
  try {
    const newUser = req.body.user;

    console.log(newUser);

    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup };
