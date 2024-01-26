const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  username: {
    type: String,
    maxlength: 100,
    required: true,
  },
  email: {
    type: String,
    maxlength: 150,
    required: true,
  },
  password: {
    type: String,
    maxlength: 150,
    required: true,
  },
});

const adminModel = mongoose.model('Admin', adminSchema);

module.exports = adminModel;
