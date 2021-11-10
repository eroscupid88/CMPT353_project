const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: { type: String, required: true },
  author: { type: String },
  bookImage: { type: String, required: true },
  donor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Book', bookSchema);
