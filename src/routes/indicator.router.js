const express = require('express');
const {
  getAllIndicator,
} = require('../controllers/indicator.controller');

const indicatorRoute = express.Router();

indicatorRoute.get('/', getAllIndicator);

module.exports = indicatorRoute;
