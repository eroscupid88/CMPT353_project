const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  requests: [{
      request: {
            type: Schema.Types.ObjectId,
            ref: 'Request'}
  }],
  staff: [{
      user: {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
  }],
  customer:[{user:{ type: Schema.Types.ObjectId, ref: 'User' }}],
});

module.exports = mongoose.model('Company', companySchema);
