// import dependencies
const express = require('express');

// import variable environment from dev environment
require('custom-env').env('dev');

// create application object
const app = express();

// path to HTML file
app.use('/', express.static('./public'));

// Server Listener
app.listen(process.env.SERVER_PORT, () =>
  console.log(`listening on port ${process.env.SERVER_PORT}`)
);
