const mongoose = require('mongoose');
const dbURL = require('../utils/configs.js').dbURL;
const Schema = mongoose.Schema;

const animalScheme = new Schema({
  name: String,
  type: String,
  gender: String,
  age: Number,
});

mongoose.connect(dbURL, { useNewUrlParser: true });

module.exports.Animal = mongoose.model('Animal', animalScheme);
