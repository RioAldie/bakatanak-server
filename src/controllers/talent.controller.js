const { CertaintyFactor } = require('../service/cf');
const Consult = require('../models/consult');

const getTalentIdentification = async (req, res) => {
  try {
    const userIndicatorValue = req.body.indicator;

    const result = CertaintyFactor(userIndicatorValue);

    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveConsultResult = async (req, res) => {
  try {
    const { result, name, age, school, city, userId } = req.body;

    const date = new Date();
    let now = date.toLocaleDateString('fr-CA');

    const newResult = await Consult({
      date: now,
      result,
      name,
      age,
      school,
      city,
      userId,
    });

    await newResult.save();

    return res.status(200).json({ message: 'save result success' });
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};

module.exports = { getTalentIdentification, saveConsultResult };
