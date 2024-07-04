const mongoose = require('mongoose');

const { Schema } = mongoose;

const consultSchema = new Schema({
  prob: {
    type: Number,
  },
  name: {
    type: String,
    maxlengh: 255,
  },
  age: {
    type: Number,
    maxlengh: 2,
  },
  school: {
    type: String,
    maxlengh: 155,
  },
  city: {
    type: String,
    maxlengh: 155,
  },
  date: {
    type: Date,
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
  talent: {
    type: String,
  },
  code: {
    type: String,
  },
  allResult: {
    type: Object,
  },
});

const consultModel = mongoose.model('Consult', consultSchema);

module.exports = consultModel;
