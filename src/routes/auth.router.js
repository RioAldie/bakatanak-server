const express = require('express');
const {
  signup,
  signin,
  signinAdmin,
  signupAdmin,
} = require('../controllers/auth.controller');

const authRoute = express.Router();

authRoute.post('/signup', signup);
authRoute.post('/signin', signin);
authRoute.post('/admin/signin', signinAdmin);
authRoute.post('/admin/signup', signupAdmin);

module.exports = authRoute;
