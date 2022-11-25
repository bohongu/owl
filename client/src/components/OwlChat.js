import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import OwlChatInput from './OwlChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../store/chat';

const socket = io.connect('http://localhost:3001');

const OwlChat = () => {
  const roomTitle = useSelector((state) => state.admin.roomTitle);
  const chat = useSelector((state) => state.chat.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('receive_message', (nickname, msg) => {
      dispatch(chatActions.setChat(msg));
    });
  }, [dispatch]);

  return (
    <>
      <RoomName>{roomTitle}</RoomName>
      <ChatBlock>
        {chat.map((chat) => (
          <div>{chat}</div>
        ))}
      </ChatBlock>
      <OwlChatInput />
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
