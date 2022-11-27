import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../store/chat';

const OwlChat = () => {
  const socket = useSelector((state) => state.socket.socket);
  const roomName = useSelector((state) => state.admin.roomTitle);
  const chats = useSelector((state) => state.chat.chats);
  // const [user, setUser] = useState(localStorage.getItem('nickname'));
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = () => {
    socket.emit('send_message', message, roomName, () => {
      dispatch(chatActions.setChats(message));
    });
    setMessage('');
  };

  useEffect(() => {
    socket.on('receive_message', (message) => {
      dispatch(chatActions.setChats(message));
      setMessage('');
    });
  }, [dispatch, socket]);

  return (
    <>
      <RoomName>{roomName}</RoomName>
      <ChatBlock>
        {chats.map((chat, idx) => (
          <div key={idx}>{chat}</div>
        ))}
      </ChatBlock>
      <ChatInputBlock>
        <label>
          <input
            placeholder="Message..."
            type="text"
            onChange={messageChangeHandler}
            value={message}
          />
          <button onClick={sendMessageHandler}>SEND</button>
        </label>
      </ChatInputBlock>
    </>
  );
};

export default OwlChat;

const RoomName = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
`;

const ChatBlock = styled.div`
  margin: 0 10px;
  height: 580px;
  background: white;
`;

const ChatInputBlock = styled.div`
  margin: 10px;
  label {
    position: relative;
  }
  input {
    height: 45px;
    padding: 0 15px;
    border: none;
    background: white;
    width: 100%;
    ::placeholder {
      color: black;
    }
  }
  button {
    height: 45px;
    position: absolute;
    bottom: 5;
    right: 5px;
    border: none;
    background: white;
    color: black;
  }
`;
