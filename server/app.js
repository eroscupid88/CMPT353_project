// import variable environment from dev environment
require('custom-env').env('dev');
// import dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');

//  use this for connect mongodb with an app
// const mongoClient = require('mongodb').MongoClient;

// create application object
const app = express();

const userRoutes = require('./routes/API/users');

const profileRoutes = require('./routes/API/profiles');

// path to HTML file
app.use('/', express.static('public'));
// For LOGGER
app.use(logger('dev'));
// PASS COOKIES from HTTP
app.use(cookieParser());
// parsing JSON format
app.use(express.json());
// Body parser
app.use(express.urlencoded({ extended: true }));
// connect user route
app.use('/v1/user', userRoutes);

app.use('/v1/profile', profileRoutes);

// middleware
// passport middle ware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);
// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// if error first, it will response with status 500
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// this will be use for the app if we have router
// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 404;
//   next(error);
// });

mongoose.connect(
  `mongodb://${process.env.HOST}:${process.env.DB_PORT}/cmpt353db`
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log(
    `Connected to mongodb successfully!\n\n uri: ${process.env.HOST}:${process.env.DB_PORT}`
  );
});

module.exports = app;
