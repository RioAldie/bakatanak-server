const mongoose = require('mongoose');

const database_url = 'mongodb://127.0.0.1:27017/db_talentexpert';

const database = mongoose.connect(
  'mongodb+srv://rioaldierwanto:7615006rio@cluster0.4qxzuee.mongodb.net/db_talentexpert'
);

module.exports = database;
