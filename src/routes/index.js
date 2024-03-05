const express = require('express');
const indicatorRoute = require('./indicator.router');
const userRoute = require('./user.router');
const authRoute = require('./auth.router');
const talentRouter = require('./talent.router');
const courseRoute = require('./course.router');

const router = express();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Minat Bakat Server' });
});

router.use('/indicator', indicatorRoute);
router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/consult', talentRouter);
router.use('/course', courseRoute);

module.exports = router;
