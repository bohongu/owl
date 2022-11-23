import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import OwlChatInput from './OwlChatInput';

const socket = io.connect('http://localhost:3001');

const OwlChat = () => {
  const [conversation, setConversation] = useState([]);
  const adminMessage = useSelector((state) => state.admin.adminMessage);

  return (
    <>
      <ChatBlock>
        <div>{adminMessage}</div>
      </ChatBlock>
      <OwlChatInput />
    </>
  );
};

export default OwlChat;

const ChatBlock = styled.div`
  margin: 10px;
  height: 620px;
  background: white;
`;
