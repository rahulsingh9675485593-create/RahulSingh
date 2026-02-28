const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  gstin: { type: String },
  email: { type: String },
  phone: { type: String }
});

module.exports = mongoose.model('Company', CompanySchema);
