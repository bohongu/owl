import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import OwlChatInput from './OwlChatInput';
import { useSelector } from 'react-redux';

const socket = io.connect('http://localhost:3001');

const OwlChat = () => {
  const roomTitle = useSelector((state) => state.admin.roomTitle);
  const [conversation, setConversation] = useState([]);

  return (
    <>
      <RoomName>{roomTitle}</RoomName>
      <ChatBlock></ChatBlock>
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
