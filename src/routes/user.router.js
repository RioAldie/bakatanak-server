const express = require('express');
const { getAllUser } = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.get('/', getAllUser);

module.exports = userRoute;
