import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import OwlChatInput from './OwlChatInput';

const socket = io.connect('http://localhost:3001');

const OwlChat = () => {
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setConversation([...conversation, data]);
    });
  }, [conversation]);

  return (
    <>
      <ChatBlock>
        <ul>
          {conversation.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
      </ChatBlock>
      <OwlChatInput />
    </>
  );
};

export default OwlChat;

const ChatBlock = styled.div`
  margin: 10px;
  height: 620px;
  background: ${(props) => props.theme.bgColor};
`;
