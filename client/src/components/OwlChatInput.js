import React, { useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';

const socket = io.connect('http://localhost:3001');

const OwlChatInput = () => {
  const [message, setMessage] = useState('');

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = () => {};

  return (
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
  );
};

export default OwlChatInput;

const ChatInputBlock = styled.form`
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
