import express from 'express';
import http, { ClientRequest } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
const app = express();

app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:3001`);
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const finding = 1;
const notFinding = 2;
const chating = 3;

let clients = [];

io.on('connection', (socket) => {
  socket.on('nickname_check', (data, done) => {
    if (!data.name) {
      socket.emit('nickname_null', '닉네임을 입력해주세요');
      return;
    }

    for (let i = 0; i < clients.length; i++) {
      if (clients[i].name === data.name) {
        socket.emit('nickname_same', '동일한 닉네임이 존재합니다.');
        return;
      }
    }

    clients.push({
      name: data.name,
      client: socket,
      roomName: '',
      status: notFinding,
    });

    socket.name = data.name;
    done();
  });

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data);
  });
});
