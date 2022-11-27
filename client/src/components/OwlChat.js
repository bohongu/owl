import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../store/chat';

const OwlChat = () => {
  const socket = useSelector((state) => state.socket.socket);
  const roomName = useSelector((state) => state.admin.roomTitle);
  const chats = useSelector((state) => state.chat.chats);
  const [notice, setNotice] = useState('');
  const inputRef = useRef();
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = () => {
    socket.emit('send_message', message, roomName, () => {
      dispatch(chatActions.setChats({ message, sep: '1' }));
    });
    setMessage('');
    inputRef.current.focus();
  };

  useEffect(() => {
    socket.on('receive_message', (message, nickname) => {
      dispatch(chatActions.setChats({ message, nickname, sep: '2' }));
      setMessage('');
    });
  }, [dispatch, socket]);

  useEffect(() => {
    socket.on('welcome_room', (notice) => setNotice(notice));
  }, [socket]);

  useEffect(() => {
    socket.on('leave_room', (notice) => setNotice(notice));
  }, [socket]);

  return (
    <>
      <RoomName>{roomName}</RoomName>
      <ChatBlock>
        <Notice>{notice}</Notice>
        {chats.map((chat, idx) => (
          <Message sep={chat.sep} key={idx}>
            <NicknameBlock> {chat.nickname}</NicknameBlock>
            <Chat sep={chat.sep}>{chat.message}</Chat>
          </Message>
        ))}
      </ChatBlock>
      <ChatInputBlock>
        <label>
          <input
            placeholder="Message..."
            type="text"
            onChange={messageChangeHandler}
            value={message}
            ref={inputRef}
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
  padding: 2px;
  height: 580px;
  border: 1px solid white;
  background: #3c3c3d;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  color: #f7f1e3;
`;

const ChatInputBlock = styled.div`
  margin: 10px;
  label {
    position: relative;
  }
  input {
    height: 45px;
    padding: 0 15px;
    border: 1px solid white;
    background: none;
    color: white;
    width: 100%;
    :focus {
      ::placeholder {
        color: #fce7d8;
      }
    }
    ::placeholder {
      color: white;
    }
  }
  button {
    height: 45px;
    position: absolute;
    top: 5;
    right: 5px;
    border: none;
    background: none;
    color: white;
    :hover {
      color: #fce7d8;
    }
  }
`;

const Message = styled.div`
  padding: 8px 10px;
  height: 58px;
  ${(prosp) =>
    prosp.sep === '1' &&
    css`
      text-align: end;
    `}
`;

const NicknameBlock = styled.div`
  font-size: 12px;
  margin-bottom: 9px;
  color: white;
`;

const Chat = styled.span`
  border-radius: 10px;
  border-top-left-radius: 0px;
  padding: 6px 10px;
  background: #f7f1e3;
  font-size: 16px;
  ${(prosp) =>
    prosp.sep === '1' &&
    css`
      border-radius: 10px;
      border-top-right-radius: 0px;
      background: #dfe6e9;
    `}
`;
