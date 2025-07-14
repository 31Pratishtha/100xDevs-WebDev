import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', function connection(socket) {
  console.log('connected to server !')

  setInterval(() => {
    socket.send('latest price: ' + Math.random())
  }, 2000)


  socket.on('message', (e) => {
    console.log(e.toString())
  })

  socket.send('hiii')
})

