const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    text: Array,
    facebook: String,
    phone: String,
    email: String,
    additionalContacts: String,
  });

module.exports = AboutSchema;