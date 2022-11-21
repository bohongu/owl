import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('연결');
  socket.on('init', (msg) => console.log(msg));
  socket.on('send_message', (msg) => console.log(msg));
});

server.listen(3001, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:3001`);
});
