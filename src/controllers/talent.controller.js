const { CertaintyFactor } = require('../service/cf.js');
const Consult = require('../models/consult');

const getTalentIdentification = async (req, res) => {
  try {
    const userIndicatorValue = req.body.indicator;

    const result = await CertaintyFactor(userIndicatorValue);

    res.status(200).json({ message: 'success', data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveConsultResult = async (req, res) => {
  try {
    const {
      name,
      age,
      school,
      city,
      talent,
      prob,
      userId,
      code,
      allResult,
    } = req.body;

    const date = new Date();
    let now = date.toLocaleDateString('fr-CA');

    const newResult = await Consult({
      date: now,
      name,
      age,
      school,
      city,
      prob,
      talent,
      userId,
      code,
      allResult,
    });

    await newResult.save();

    return res.status(200).json({ message: 'save result success' });
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};

const deleteConsultationResult = async (req, res) => {
  try {
    const { resultId } = req.body;

    await Consult.findByIdAndDelete({ _id: resultId });

    return res.status(200).json({ message: 'Delete Success' });
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};
const getResultByUserId = async (req, res) => {
  try {
    const { userId } = req.body;

    const result = await Consult.find({ userId: userId });
    if (!result) {
      return res
        .status(301)
        .json({ message: 'Dtata kosong', data: result });
    }
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: 'error' });
  }
};
const getResultById = async (req, res) => {
  try {
    const result = await Consult.findOne({
      _id: req.params.id,
    });
    if (!result) {
      return res.status(401).json({ message: 'Data kosong' });
    }
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: 'error' });
  }
};
module.exports = {
  getTalentIdentification,
  saveConsultResult,
  deleteConsultationResult,
  getResultByUserId,
  getResultById,
};
