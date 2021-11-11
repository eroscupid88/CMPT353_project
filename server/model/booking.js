const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  register:{
    type: String,
    required: false
  },
  pickUpAt: { type: Date, required: 'Starting date is required' },
  createdAt: { type: Date, default: Date.now },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
});

module.exports = mongoose.model('Booking', bookingSchema);
