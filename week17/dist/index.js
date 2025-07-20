"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// "room1": [socket1, socket2, socket3...]
let allSockets = [];
wss.on('connection', (socket) => {
    socket.on('message', (msg) => {
        var _a;
        //@ts-ignore
        const parsedMsg = JSON.parse(msg);
        if (parsedMsg.type === 'join') {
            console.log('User joined room ' + parsedMsg.payload.roomId);
            allSockets.push({
                socket,
                room: parsedMsg.payload.roomId
            });
        }
        if (parsedMsg.type === 'chat') {
            console.log('User wants to chat');
            const currentUserRoom = (_a = allSockets.find((x) => x.socket === socket)) === null || _a === void 0 ? void 0 : _a.room;
            for (const v of allSockets) {
                if (v.room === currentUserRoom) {
                    v.socket.send(parsedMsg.payload.message);
                }
            }
        }
    });
    // socket.on('disconnect', () => {
    //   allSockets = allSockets.filter(x => x != socket)
    // })
});
