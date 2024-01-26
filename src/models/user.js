const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
  gender: {
    type: String,
    enum: ['pria', 'wanita'],
  },
  age: {
    type: Number,
    maxlength: 2,
  },
  password: {
    type: String,
    maxlength: 150,
    required: true,
  },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
