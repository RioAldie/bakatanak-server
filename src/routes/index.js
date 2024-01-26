const express = require('express');
const {
  getTalentIdentification,
} = require('../controllers/talent.controller');
const indicatorRoute = require('./indicator.router');
const userRoute = require('./user.router');
const authRoute = require('./auth.router');

const router = express();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Minat Bakat Server' });
});

router.post('/', getTalentIdentification);
router.use('/indicator', indicatorRoute);
router.use('/user', userRoute);
router.use('/auth', authRoute);

module.exports = router;
