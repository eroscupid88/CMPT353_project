// import variable environment from dev environment
require('custom-env').env('dev');
// import dependencies
const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//  use this for connect mongodb with an app
// const mongoClient = require('mongodb').MongoClient;

// create application object
const app = express();

const userRoutes = require('./routes/API/users');

const profileRoutes = require('./routes/API/profiles');

// path to HTML file
app.use('/', express.static('public'));
// connect user route
app.use('/user', userRoutes);

app.use('/profile', profileRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// middleware
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

// use this if using mongodb to connect with app
// mongoClient.connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}`);

// to connect with docker
// mongoose.connect(
//   `mongodb://${process.env.DOCKER_HOST}:${process.env.DOCKER_DB_PORT}`
// );
mongoose.connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected to mongodb successfully');
});
module.exports = app;