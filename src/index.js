import app from "./app";
import { Server as WebsocketsServer } from "socket.io";
import http from "http";

import {connectDB} from "./db";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketsServer(httpServer);

io.on('connection', (socket) => {
    console.log('New client connected');

    // Manejar eventos de mensaje
    socket.on('message', (message) => {
        console.log('Message received:', message);
        
        // Emitir el mensaje a todos los clientes conectados, incluido el remitente
        io.emit('message', message);
    });

    // Manejar eventos de desconexión
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

console.log('Server is running on port 3000');
