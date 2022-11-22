import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { adminActions } from '../store/admin';
import { socketActions } from '../store/socket';
import { startActions } from '../store/start';

const socket = io.connect('http://localhost:3001');

const OwlJoin = () => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const { nickName, handle } = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  const startFinding = () => {
    if (handle === null) {
      dispatch(
        socketActions.setHandle(
          setInterval(() => {
            socket.emit('finding_room', { name: nickName });
          }, 500),
        ),
      );
    }
  };

  const stopFinding = () => {
    clearInterval(handle);
    dispatch(socketActions.setHandle(null));
  };

  const onNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleStartChat = () => {
    dispatch(socketActions.setnickName(nickname));
    socket.emit('nickname_check', { name: nickname }, () => {
      setNickname('');
      dispatch(startActions.setStart());
    });
    socket.emit('find_room_click', { name: nickname });
    startFinding();
  };

  socket.on('find_room_complete', (data) => {
    dispatch(adminActions.setMessage(data));
  });

  socket.on('nickname_null', (data) => {
    setError(data);
  });

  socket.on('nickname_same', (data) => {
    setError(data);
  });

  socket.on('finding_room_complete', (data, msg) => {
    stopFinding();
    dispatch(adminActions.setMessage(msg));
    dispatch(socketActions.setroomName(data));
  });
  return (
    <JoinBlock>
      <label>
        <input
          type="text"
          placeholder="Enter Nickname"
          value={nickname}
          onChange={onNicknameChange}
        />
        <button onClick={handleStartChat}>START</button>
      </label>
      <div>{error}</div>
    </JoinBlock>
  );
};

export default OwlJoin;

const JoinBlock = styled.div`
  margin-bottom: 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    position: relative;
  }
  input {
    height: 45px;
    width: 330px;
    padding: 0 15px;
    border: none;
    background: none;
    border: 1px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    margin-bottom: 10px;
    ::placeholder {
      color: ${(props) => props.theme.textColor};
    }
  }

  button {
    height: 45px;
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    background: none;
    color: ${(props) => props.theme.textColor};
  }
  div {
    color: red;
  }
`;
