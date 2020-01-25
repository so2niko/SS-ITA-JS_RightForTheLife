const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
  });

module.exports = mongoose.model('Animal', animalSchema);