const express = require('express');
const {
  getTalentIdentification,
  saveConsultResult,
  deleteConsultationResult,
  getResultByUserId,
  getResultById,
} = require('../controllers/talent.controller');

const talentRouter = express.Router();

talentRouter.post('/', getTalentIdentification);
talentRouter.post('/save', saveConsultResult);
talentRouter.delete('/', deleteConsultationResult);
talentRouter.post('/history', getResultByUserId);
talentRouter.get('/result/:id', getResultById);

module.exports = talentRouter;
