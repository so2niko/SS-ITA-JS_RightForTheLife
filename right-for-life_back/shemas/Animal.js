const mongoose = require('mongoose');
const dbUrl = require('../utils/configs.js').dbUrl;
const Schema = mongoose.Schema;

const animalScheme = new Schema({
  name: String,
  type: String,
  gender: String,
  age: Number,
});

mongoose.connect(dbUrl, { useNewUrlParser: true });

module.exports.Animal = mongoose.model('Animal', animalScheme);
