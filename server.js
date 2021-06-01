require('dotenv').config();
const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
// const {Server} = require("socket.io");
// const io = new Server(server);
const socketio = require('socket.io');
const io = socketio(server);
const roomServer = io.listen(server); ///TODO: ?

const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const usersCtrl = require('./controllers/users');

require('./config/database');

// Require controllers here



// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api/rooms', require('./routes/api/rooms'));
app.use('/api/users', require('./routes/api/users'));
//app.use('/api/invites', require('./routes/api/invites'));

//"catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

///TODO: refactor these sockets ---------------------------------------------
io.on('connection', socket => {
  console.log("New WS connection ...");
});
// handle incoming connections from clients
roomServer.sockets.on('connection', socket => {
    // once a client has connected, we expect to get a ping from them 
    // saying what room they want to join
    socket.on('room', room => {
        console.log("New Room connection ...");
        socket.join(room);
    });
});
// now, it's easy to send a message to just the clients in a given room
let room = "abc123";
roomServer.sockets.in(room).emit('message', 'what is going on, party people?');

///TODO: till here -----------------------------------------------------------------

const port = process.env.PORT || 3001;

// change from app.listen to server.listen for socket.io working
server.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
