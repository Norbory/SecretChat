import app from "./app";
import { Server as WebsocketsServer } from "socket.io";
import http from "http";

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketsServer(httpServer);

console.log('Server is running on port 3000');