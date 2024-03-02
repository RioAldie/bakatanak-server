const express = require('express');

const { getAllCourse } = require('../controllers/course.controller');

const courseRoute = express.Router();

courseRoute.get('/', getAllCourse);

module.exports = courseRoute;
