/* global __dirname */
const options = {
  /* https keys */
};

const path = require('path');
const express = require('express');
const app = express();
const server = require('https').Server(options, app);
const io = require('socket.io')(server);
const http = require('http');
http.createServer(app).listen(80, 'data.jonaskuske.com');

const SESSIONS = {};

server.listen(443, 'data.jonaskuske.com');
app.use((req, res, next) => {
  if (req.secure) next();
  else res.redirect(`https://${req.headers.host}${req.url}`);
});
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});


io.sockets.on('connection', (socket) => {
  socket.emit('connection_established');
  SESSIONS[socket.id] = socket;

  socket.on('set_color', ({ id, color }) => {
    if (SESSIONS[id]) SESSIONS[id].emit('set_color', { color });
  });
  socket.on('request_server', ({ id }) => {
    if (SESSIONS[id]) socket.emit('succesful_match', ({ id }));
  });
});