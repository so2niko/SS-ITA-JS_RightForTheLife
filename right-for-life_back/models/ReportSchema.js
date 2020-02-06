const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: Number,
    title: String,
    gallery: Array
  });

module.exports = ReportSchema;