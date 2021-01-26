require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const http = require("http");
const socketIo = require("socket.io");
require('./config/database');

// Require controllers here

const app = express();

// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/invites', require('./routes/api/invites'));
app.use('/api/rounds', require('./routes/api/rounds'));

// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
