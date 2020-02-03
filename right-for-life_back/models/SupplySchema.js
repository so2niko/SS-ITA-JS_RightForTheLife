const mongoose = require('mongoose');

const SuppliesSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    info: String,
    amount: String,
  });

module.exports = SuppliesSchema;