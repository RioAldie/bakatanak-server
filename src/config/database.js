const mongoose = require('mongoose');

const database_url = 'mongodb://127.0.0.1:27017/db_talentexpert';

const database = mongoose.connect(database_url);

module.exports = database;
