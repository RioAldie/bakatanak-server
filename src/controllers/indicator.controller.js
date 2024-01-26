const Indicator = require('../models/indicator');

const getAllIndicator = async (req, res) => {
  try {
    const indicators = await Indicator.find();
    res.status(200).json({ message: 'Success', data: indicators });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { getAllIndicator };
