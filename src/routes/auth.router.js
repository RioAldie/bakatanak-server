const express = require('express');
const { signup } = require('../controllers/auth.controller');

const authRoute = express.Router();

authRoute.post('/', signup);

module.exports = authRoute;
