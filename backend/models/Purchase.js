const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  date: { type: Date, default: Date.now },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    rate: { type: Number }
  }],
  total: { type: Number }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
