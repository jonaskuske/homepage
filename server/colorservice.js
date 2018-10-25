module.exports = io => {
  // ! TODO: use Map instead of Object for ID Mapping
  const SESSIONS = {}

  io.of('/colorservice').on('connection', socket => {
    const { id } = socket

    // Store new socket in map and emit connection event
    SESSIONS[id] = socket
    socket.emit('connection_established')

    // Pass along color change event to specified socket (if it exists)
    socket.on('set_color', ({ id, color }) => {
      if (SESSIONS[id]) SESSIONS[id].emit('set_color', { color })
    })
    // If client looks up whether a specified ID exists: emit event if it does
    socket.on('request_server', ({ id }) => {
      if (SESSIONS[id]) socket.emit('succesful_match', { id })
    })

    // Delete socket from Map on Disconnect
    socket.on('disconnect', () => {
      SESSIONS[id] = undefined
    })
  })
}