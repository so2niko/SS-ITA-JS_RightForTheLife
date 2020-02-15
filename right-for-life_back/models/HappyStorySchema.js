const mongoose = require('mongoose');

const HappyStorySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    date: Number,
    title: String,
    photo: String,
    text: String,
    gallery: Array,
    videos: Array,
  });

module.exports = HappyStorySchema;