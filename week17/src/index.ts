import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080})

let userCount = 0

let allSockets: WebSocket[] = []

wss.on('connection', (socket) => {
  allSockets.push(socket)
  userCount++
  console.log('user connected #' + userCount)


  //maintain an array of connected users
  //a user sends a msg. 
  // server: on.'message' -> msg.send to each of connected users.

  socket.on('message', (msg) => {
    for(const s of allSockets){
        console.log('message received: ' + msg.toString())
        s.send(msg.toString())
      }
  })

  socket.on('disconnect', () => {
    allSockets = allSockets.filter(x => x != socket)
  })
})