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

let users = [];

io.on('connection', (socket) => {
  socket.on('nickname', (data, done) => {
    if (!data.nickname) {
      socket.emit('nickname_null', '닉네임을 입력해주세요');
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].nickname === data.nickname) {
        socket.emit('nickname_same', '동일한 닉네임이 존재합니다.');
        return;
      }
    }

    users.push({ nickname: data.nickname });
    socket.nickname = data.nickname;
    done();
  });
});
