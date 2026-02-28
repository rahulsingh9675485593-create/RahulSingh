const mongoose = require('mongoose');

const InvoiceItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  gst: { type: Number, default: 0 }
});

const InvoiceSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  date: { type: Date, default: Date.now },
  items: [InvoiceItemSchema],
  subTotal: { type: Number, default: 0 },
  totalGST: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  type: { type: String, enum: ['sales', 'purchase'], default: 'sales' }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
