const mongoose = require('mongoose');
const dbOptions = require('../utils/configs.js').dbOptions;
const dbURL = require('../utils/configs.js').dbURL;
const Schema = mongoose.Schema;

const animalScheme = new Schema({
  name: String,
  type: String,
  gender: String,
  age: Number,
});

mongoose.connect(dbURL, dbOptions);

module.exports.Animal = mongoose.model('Animal', animalScheme);
