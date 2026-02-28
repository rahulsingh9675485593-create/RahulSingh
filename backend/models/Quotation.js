const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  date: { type: Date, default: Date.now },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    rate: { type: Number }
  }],
  total: { type: Number }
});

module.exports = mongoose.model('Quotation', QuotationSchema);
