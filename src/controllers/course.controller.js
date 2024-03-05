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

const postNewCourse = async (req, res) => {
  try {
    const { course } = req.body;

    const newCourse = await Course(course);

    await newCourse.save();

    return res
      .status(200)
      .json({ message: 'post new course success' });
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const course = await Course.findById({ _id: courseId });

    if (course === null) {
      return res
        .status(400)
        .json({ message: 'Course tidak ditemukan' });
    }

    await Course.findByIdAndDelete({ _id: courseId });

    return res.status(200).json({ message: 'Delete Success' });
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};

const getCourseByTalent = async (req, res) => {
  try {
    const course = await Course.find({
      category: req.params.category,
    });

    if (course.length <= 0) {
      return res.status(400).json({ message: 'course not found' });
    }
    return res.status(200).json({ message: 'success', data: course });
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};

module.exports = {
  getAllCourse,
  postNewCourse,
  deleteCourse,
  getCourseByTalent,
};
