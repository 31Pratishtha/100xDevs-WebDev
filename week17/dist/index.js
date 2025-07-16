"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSockets = [];
wss.on('connection', (socket) => {
    allSockets.push(socket);
    userCount++;
    console.log('user connected #' + userCount);
    //maintain an array of connected users
    //a user sends a msg. 
    // server: on.'message' -> msg.send to each of connected users.
    socket.on('message', (msg) => {
        for (const s of allSockets) {
            console.log('message received: ' + msg.toString());
            s.send(msg.toString());
        }
    });
});
