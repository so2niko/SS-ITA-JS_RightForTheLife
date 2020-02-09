const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    textHome: Array,
    photosHome: Array,
    text: Array,
    photos: Array,
    instagram: String,
    facebook: String,
    phone: String,
    email: String,
  });

module.exports = AboutSchema;