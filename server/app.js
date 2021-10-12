// import variable environment from dev environment
require('custom-env').env('dev');
// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create application object
const app = express();

// path to HTML file
app.use('/', express.static('./public'));
mongoose.connect('mongodb://localhost:27017/usersdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = app;
