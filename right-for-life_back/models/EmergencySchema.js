const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: Number,
    title: String,
    photo: String,
    gallery: Array,
    videos: Array,
    text: String,
  });

module.exports = EmergencySchema;