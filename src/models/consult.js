const mongoose = require('mongoose');

const { Schema } = mongoose;

const consultSchema = new Schema({
  result: {
    type: Object,
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
});

const consultModel = mongoose.model('Consult', consultSchema);

module.exports = consultModel;
