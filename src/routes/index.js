const express = require('express');
const {
  getTalentIdentification,
} = require('../controllers/talent.controller');
const router = express();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Minat Bakat Server' });
});

router.post('/', getTalentIdentification);

module.exports = router;
