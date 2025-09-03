import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080})

interface User {
  socket: WebSocket;
  room: string;
}

// "room1": [socket1, socket2, socket3...]
let allSockets: User[] = []

wss.on('connection', (socket) => {

  socket.on('message', (msg) => {

    //@ts-ignore
    const parsedMsg = JSON.parse(msg);

    if(parsedMsg.type === 'join'){
      console.log('User joined room ' + parsedMsg.payload.roomId)
      allSockets.push({
        socket, 
        room: parsedMsg.payload.roomId
      })
    }``

    if(parsedMsg.type === 'chat'){
      console.log('User wants to chat')
      const currentUserRoom = allSockets.find((x) => x.socket === socket)?.room
      
      for(const v of allSockets){
        if(v.room === currentUserRoom){
          v.socket.send(parsedMsg.payload.message)
        }
      }
    }
  })

  // socket.on('disconnect', () => {
  //   allSockets = allSockets.filter(x => x != socket)
  // })
})