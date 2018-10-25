const http = require('http')
const express = require('express')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)

// socket.io instance for web sockets
const io = socketIo(server)
require('./colorservice')(io)

server.listen(8085, 'localhost')
