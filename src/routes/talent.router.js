const express = require('express');
const {
  getTalentIdentification,
  saveConsultResult,
  deleteConsultationResult,
} = require('../controllers/talent.controller');

const talentRouter = express.Router();

talentRouter.post('/', getTalentIdentification);
talentRouter.post('/save', saveConsultResult);
talentRouter.delete('/', deleteConsultationResult);

module.exports = talentRouter;
