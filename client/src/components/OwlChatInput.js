import React, { useState } from 'react';
import styled from 'styled-components';

const OwlChatInput = () => {
  const [message, setMessage] = useState('');
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    console.log(message);
    setMessage('');
  };
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
    background: ${(props) => props.theme.bgColor};
    width: 100%;
    ::placeholder {
      color: ${(props) => props.theme.textColor};
    }
  }
  button {
    height: 45px;
    position: absolute;
    bottom: 5;
    right: 5px;
    border: none;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;
