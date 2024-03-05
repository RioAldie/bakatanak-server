const express = require('express');

const {
  getAllCourse,
  postNewCourse,
  deleteCourse,
} = require('../controllers/course.controller');

const courseRoute = express.Router();

courseRoute.get('/', getAllCourse);
courseRoute.post('/', postNewCourse);
courseRoute.delete('/', deleteCourse);

module.exports = courseRoute;
