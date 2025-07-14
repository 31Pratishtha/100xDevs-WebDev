"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(socket) {
    console.log('connected to server !');
    setInterval(() => {
        socket.send('latest price: ' + Math.random());
    }, 2000);
    socket.on('message', (e) => {
        console.log(e.toString());
    });
    socket.send('hiii');
});
