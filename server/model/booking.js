const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  pickUpAt: { type: Date, required: 'Starting date is required' },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  book: { type: Schema.Types.ObjectId, ref: 'Book' },
});

module.exports = mongoose.model('Booking', bookingSchema);
