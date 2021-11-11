const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  staff: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  customer:[{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Company', companySchema);
