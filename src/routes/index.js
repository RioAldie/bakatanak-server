const express = require('express');
const {
  getTalentIdentification,
} = require('../controllers/talent.controller');
const indicatorRoute = require('./indicator.router');

const router = express();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Minat Bakat Server' });
});

router.post('/', getTalentIdentification);
router.use('/indicator', indicatorRoute);

module.exports = router;
