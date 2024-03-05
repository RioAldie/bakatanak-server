const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  category: {
    type: Array,
  },
  image: {
    type: String,
    maxlengh: 25,
  },
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;
