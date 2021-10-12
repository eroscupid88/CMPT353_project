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
mongoose.connect(
  `mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected to mongodb successfully');
});
module.exports = app;
