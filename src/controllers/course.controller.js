const Course = require('../models/course');

const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({ message: 'Success', data: courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { getAllCourse };
