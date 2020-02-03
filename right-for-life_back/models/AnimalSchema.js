const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    gender: String,
    age: Number,
    photos: Array,
    description: String,
  });

module.exports = AnimalSchema;