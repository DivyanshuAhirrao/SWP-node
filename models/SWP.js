const mongoose = require('mongoose');

const SWPSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
  withdrawAmount: { type: Number, required: true },
  frequency: { type: String, enum: ['monthly', 'quarterly'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model('SWP', SWPSchema);
