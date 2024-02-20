import app from "./app";
import { Server as WebsocketsServer } from "socket.io";
import http from "http";
import sockets from "./sockets";

import {connectDB} from "./db";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
console.log('Server is running on port 3000');

const io = new WebsocketsServer(httpServer);
sockets(io);