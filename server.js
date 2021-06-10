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
const callBack = msg =>{
  console.log(msg);
}
io.on('connection', socket => {
  console.log("New WS connection -----> ID=" , socket.id);
  console.log(`------------------> Assurance: socket.id = ${socket.id}`);
  socket.on('◙join', ({player, room}, callBack) => {
    // call fallBack and return in case of error detecting
    console.log(`------------------> Joining ${player} to ${room} `);
    console.log(`------------------> Assurance: socket.id = ${socket.id}`);
    socket.join(room);
    // usage: emit('message , payload) exaples:
    // socket.emit("message", {user: "admin", text: "message from admin to user of this socket"});
    // socket.broadcast.to(room).emit("message", {user: "admin", text: "message from admin to all other users in room"});
  });
  socket.on('◙leave', ({player, room}, callBack) => {
    console.log(`------------------> Leaving ${player} from ${room} `);
    console.log(`------------------> Assurance: socket.id = ${socket.id}`);
    socket.leave(room);    
  });
  socket.on('disconnect', () => {
    console.log("WS disconnected ------> ID=" , socket.id);
  });
});


///TODO: till here -----------------------------------------------------------------

const port = process.env.PORT || 3001;

// change from app.listen to server.listen for socket.io working
server.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
