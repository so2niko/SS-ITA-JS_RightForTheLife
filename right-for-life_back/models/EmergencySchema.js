const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: Number,
    title: String,
    photo: String,
    text: String,
  });

module.exports = EmergencySchema;