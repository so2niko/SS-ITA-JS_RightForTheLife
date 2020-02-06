const mongoose = require('mongoose');

const ReportsSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: Number,
    title: String,
    gallery: [String]
  });

module.exports = ReportsSchema;