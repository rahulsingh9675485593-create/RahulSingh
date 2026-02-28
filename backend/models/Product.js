const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, unique: true },
  hsn_sac: { type: String },
  unit: { type: String },
  taxRate: { type: Number, default: 0 },
  stockQuantity: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);
