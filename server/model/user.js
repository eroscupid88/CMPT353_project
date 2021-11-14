const mongoose = require('mongoose');
const {Schema} = require("mongoose");

// Schema to create schema for User
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  firstname: {
    type: String,
    required: true,
    max: 40,
  },
  lastname: {
    type: String,
    required: true,
    max: 40,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
  },
  companies: [{type: Schema.Types.ObjectId, ref: 'Company'}],
  requesting: [{ type: Schema.Types.ObjectId, ref: 'Request' }]
});

module.exports = mongoose.model('User', userSchema);
