const express = require('express');
const {
  getTalentIdentification,
} = require('../controllers/talent.controller');

const talentRouter = express.Router();

talentRouter.post('/', getTalentIdentification);

module.exports = talentRouter;
