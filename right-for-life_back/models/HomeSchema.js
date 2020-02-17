const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    gallery: Array,
    title: String,
    description: Array,
    emergencies: { type: mongoose.Schema.Types.ObjectId, ref: 'Emergency' },
    news: { type: mongoose.Schema.Types.ObjectId, ref: 'News' },
  });

module.exports = HomeSchema;