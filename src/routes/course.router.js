const express = require('express');

const {
  getAllCourse,
  postNewCourse,
  deleteCourse,
  getCourseByTalent,
} = require('../controllers/course.controller');

const courseRoute = express.Router();

courseRoute.get('/', getAllCourse);
courseRoute.post('/', postNewCourse);
courseRoute.delete('/', deleteCourse);
courseRoute.get('/:category', getCourseByTalent);

module.exports = courseRoute;
