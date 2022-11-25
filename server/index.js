import express from 'express';
import http from 'http';
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

const users = [];
const roomCheck = [];
const roomListFn = () => {
  const sids = io.sockets.adapter.sids;
  const rooms = io.sockets.adapter.rooms;
  const roomList = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      roomList.push(key);
    }
  });
  return roomList;
};

io.on('connection', (socket) => {
  /* CREATE NICKNAME */
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
    console.log(users);
    done();
    io.sockets.emit('room_list', roomListFn());
  });
  /* CREATE CHAT ROOM */
  socket.on('create_room', (roomName, done) => {
    if (!roomName) {
      socket.emit('roomName_null', '채팅방명을 입력해주세요');
      return;
    }

    for (let i = 0; i < roomCheck.length; i++) {
      if (roomCheck[i] === roomName) {
        console.log(roomCheck[i]);
        socket.emit('roomName_same', '동일한 채팅방명이 존재합니다.');
        return;
      }
    }

    roomCheck.push(roomName);
    socket.join(roomName);
    done();
    io.sockets.emit('room_list', roomListFn());
  });
  /* DISCONNECT CHAT ROOM */
  socket.on('disconnect', () => {
    io.sockets.emit('room_list', roomListFn());
  });

  /* ENTER ROOM */
  socket.on('enter_room', (roomName, done) => {
    socket.join(roomName);
    done();
  });

  /* MESSAGE */
  socket.on('send_message', (message, roomName, done) => {
    socket.to(roomName).emit('receive_message', socket.nickname, message);
    done();
  });
});
