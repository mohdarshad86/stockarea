const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
  name: String,
  code: {
    type: String,
    unique: true
  },
  city: String,
  space_available: Number,
  type: String,
  cluster: String,
  is_registered: {
    type: Boolean,
    default: false
  },
  is_live: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Warehouse', warehouseSchema);