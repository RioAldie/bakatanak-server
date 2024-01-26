const mongoose = require('mongoose');

const { Schema } = mongoose;

const indicatorSchema = new Schema({
  name: {
    type: String,
    maxlengh: 255,
    required: true,
  },
  code: {
    type: String,
    maxlengh: 5,
    required: true,
  },
  quiz: {
    type: String,
    maxlengh: 255,
    required: true,
  },
});

const indicatorModel = mongoose.model('indicator', indicatorSchema);

module.exports = indicatorModel;
