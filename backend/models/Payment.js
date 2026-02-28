const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  type: { type: String, enum: ['receipt', 'payment'], required: true },
  party: { type: mongoose.Schema.Types.ObjectId, required: true }, // customer or vendor id
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  method: { type: String }
});

module.exports = mongoose.model('Payment', PaymentSchema);
