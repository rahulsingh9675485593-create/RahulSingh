const mongoose = require('mongoose');

const StockMovementSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  type: { type: String, enum: ['in', 'out'], required: true },
  reference: { type: String }, // e.g. invoice or purchase id
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StockMovement', StockMovementSchema);
