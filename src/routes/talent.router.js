const express = require('express');
const {
  getTalentIdentification,
  saveConsultResult,
} = require('../controllers/talent.controller');

const talentRouter = express.Router();

talentRouter.post('/', getTalentIdentification);
talentRouter.post('/save', saveConsultResult);

module.exports = talentRouter;
