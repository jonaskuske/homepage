const http = require('http')
const express = require('express')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)

// socket.io instance for web sockets
const io = socketIo(server)
require('./colorservice')(io)

app.get('*', (_, response) => response.send(`
  <!DOCTYPE html>
  <html lang=en>
    <head>
      <meta charset="UTF-8">
      <meta name=viewport content="width=device-width,initial-scale=1">
      <title>colorsync service</title>
      <link rel="shortcut icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAMMOAADDDgAAAAAAAAAAAAAAAAAAAAAAABTAzAABu8gAA7zJDgK7yEkBu8hUA7zJEgK8yAAzyNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi9ygAAuscAArzILQG7yK8Au8jzALvI+QG7yI0HvcoEBbzJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq+ygAAu8gAArzIMwC7yNEAu8j/ALvI/wC7yP8Au8jfArzJIQK8yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACu8gAA7zJHQG7yMQAu8j/ALvI+wC7yP4Au8j/ALvI+wG7yGUAuscABr3JAAAAAAAAAAAAAAAAAAAAAAAAAAAACb3KAwG7yI0Au8j5AbvImgK7yFIBu8h5ALvI6AC7yP8Au8jgAbvIXgO8yRYIvcoDALjFACXF0AAAAAAAAAAAAAK8yDoAu8jqAbvIswK8yTkBu8igArvIVAG7yHcAu8j/ALvI/wC7yPgAu8jTAbvIqwG7yIkBu8hdArzJIQy+ywEBu8iPALvI/wG7yIkBu8hnALvI/wG7yKQCvMhRALvI+gC7yP8Au8j/ALvI/wC7yP8Au8j/ALvI/QC7yNYCu8hLAbvIxgC7yP8Au8jHA7zJNwG7yGkCvMk8AbvIlAC7yP8Au8j/ALvI/wC7yOUAu8jRALvI8wC7yP8Au8j/AbvIuwG7yMwAu8j/ALvI/gG7yMYBu8iGAbvIpwC7yPEAu8j/ALvI/wG7yMMCvMlAA7zJNwK7yGMAu8juALvI/wG7yMsBu8iwALvI/wC7yP8Au8j/AbvIxAK7yFoCu8hPAbvIrAC7yP0Bu8hiAbvIggC7yOMCvMhDAbvIsAC7yP8Bu8ioAbvIcwC7yPwAu8j/ALvI5gK8yUABu8iJAbvInQO8yTcBu8jQAbvIcQG7yGgBu8i+ArzJOwG7yLwAu8j6AbvIXQK8ySUAu8jWALvI/wC7yM0CvMk9ALvI6AC7yPkCvMhMAbvIrwC7yN4Cu8haA7zJPQG7yIYAu8j5AbvItAS8yREAuMYAAbvIZgC7yPgAu8juArzITAG7yGkBu8h5ArzJPAC7yNsAu8j/ALvI9wC7yO8Au8j+ALvI1QK8yDIAu8gAA7zJAAS8yQcBu8h7ALvI8gC7yNsBu8h4AbvIbQC7yMcAu8j/ALvI/wC7yP8Au8j9AbvIwAK8yDUAuscAB73KAAAAAAAEvMkABbzJBQK7yEoBu8izALvI6QC7yPkAu8j+ALvI+AC7yOsBu8jCAbvIbAO8yRUAu8gADL7LAAAAAAAAAAAAAAAAABTAzAAAu8gABLzJCgK8yDACu8hVAbvIYwG7yFcCvMg2BLzJEDLI0wALvsoAAAAAAAAAAAAAAAAA8P8AAOB/AADAfwAAgH8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAIADAADABwAA8A8AAA=="/>
      <style>@import url(https://fonts.googleapis.com/css?family=Raleway:400,600)</style>
      <style>body{text-align:center;font-family:Raleway,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif}a{color:currentColor}h1{margin:3rem 0;text-transform:uppercase}</style>
    </head>
    <body>
      <h1>colorsync service</h1>
      <p>This is the server syncing theme colors between <a href="http://localhost:8080">the main portfolio website</a> and the <a href="http://localhost:8081">remote colorpicker</a>.</p>
      <p>There is no content to be found here.</p>
    </body>
  </html>`
))

server.listen(8082, 'localhost')
