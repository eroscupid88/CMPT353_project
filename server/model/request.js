const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestingSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  register:{
    type: String,
    required: false
  },
  createdAt: { type: Date, default: Date.now },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  staffrequest: {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    atype: {
      type:Boolean,
      required: false
    }

  },
  customerrequest: {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    atype: {
      type:Boolean,
      required: false
    }
  }
});

module.exports = mongoose.model('Request', requestingSchema);
