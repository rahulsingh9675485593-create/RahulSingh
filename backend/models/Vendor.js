const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gstin: { type: String },
  state: { type: String },
  address: { type: String },
  contact: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Vendor', VendorSchema);
