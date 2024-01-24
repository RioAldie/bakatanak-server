const { CertaintyFactor } = require('../service/cf');

const getTalentIdentification = async (req, res) => {
  const userIndicatorValue = req.body.indicator;

  const result = CertaintyFactor(userIndicatorValue);

  res.status(200).json({ message: result });
};

module.exports = { getTalentIdentification };
