import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../store/chat';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const OwlChat = () => {
  const socket = useSelector((state) => state.socket.socket);
  const roomName = useSelector((state) => state.admin.roomTitle);
  const chats = useSelector((state) => state.chat.chats);
  const inputRef = useRef();
  const chatRef = useRef();
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
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

  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessageHandler();
    }
  };

  useEffect(() => {
    socket.on('receive_message', (message, nickname) => {
      dispatch(chatActions.setChats({ message, nickname, sep: '2' }));
      setMessage('');
    });
  }, [dispatch, socket]);

  useEffect(() => {
    socket.on('welcome_room', (notice) =>
      dispatch(chatActions.setChats({ notice, sep: '3' })),
    );
  }, [dispatch, socket]);

  useEffect(() => {
    socket.on('leave_room', (notice) =>
      dispatch(chatActions.setChats({ notice, sep: '3' })),
    );
  }, [dispatch, socket]);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  });

  useEffect(() => {
    socket.on('user_count', (count) => setCount(count));
  }, [socket]);

  return (
    <>
      <RoomName>
        <div>{roomName}</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <BsFillPersonFill style={{ marginRight: '5px', fontSize: '22px' }} />
          {count}
        </div>
      </RoomName>
      <ChatBlock ref={chatRef}>
        {chats.map((chat, idx) => (
          <Message sep={chat.sep} key={idx}>
            <NicknameBlock> {chat.nickname}</NicknameBlock>
            <Chat sep={chat.sep}>
              {chat.message} {chat.notice}
            </Chat>
          </Message>
        ))}
      </ChatBlock>
      <ChatInputBlock>
        <label>
          <input
            placeholder="Message"
            type="text"
            onChange={messageChangeHandler}
            value={message}
            ref={inputRef}
            onKeyPress={handleOnKeyPress}
          />
          <button onClick={sendMessageHandler}>
            <BsArrowUpCircleFill />
          </button>
        </label>
      </ChatInputBlock>
    </>
  );
};

export default OwlChat;

const RoomName = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #608cfe;
  border-radius: 12px;
  padding: 5px 14px;
  div {
    color: white;
    font-family: 'SCDream6';
    font-size: 18px;
  }
`;

const ChatBlock = styled.div`
  margin: 0 10px;
  height: 638px;
  border: 3px solid #b8c7ff;
  border-radius: 20px;
  background: white;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ChatInputBlock = styled.div`
  margin: 10px;
  label {
    position: relative;
  }
  input {
    border-radius: 15px;
    height: 45px;
    padding: 0 15px;
    border: 3px solid #b8c7ff;
    background: none;
    color: #608cfe;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    :focus {
      outline: none;
      ::placeholder {
        color: #608cfe;
      }
    }
    ::placeholder {
      color: #b8c7ff;
    }
  }
  button {
    height: 45px;
    position: absolute;
    top: -8px;
    right: 5px;
    border: none;
    background: none;
    color: #608cfe;
    font-size: 28px;
    :hover {
      color: #b8c7ff;
    }
  }
`;

const Message = styled.div`
  padding: 6px 10px;
  margin-bottom: 15px;
  height: 58px;
  ${(prosp) =>
    prosp.sep === '1' &&
    css`
      margin-bottom: 0;
      text-align: end;
    `}
  ${(props) =>
    props.sep === '3' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 95%;
      margin: 0 auto;
      margin-top: 10px;
      border-radius: 18px;
      background: #bfd6fb;
      height: 30px;
    `};
`;

const NicknameBlock = styled.div`
  font-size: 12px;
  margin-bottom: 12px;
  color: black;
  font-family: 'NanumSquareNeo-Variable';
  font-weight: bold;
`;

const Chat = styled.span`
  border-radius: 10px;
  border-top-left-radius: 0px;
  padding: 8px 12px;
  background: none;
  border: 3px solid #e6e7f8;
  font-size: 15px;
  font-family: 'Nanum';
  font-weight: 600;
  color: #608cfe;
  ${(prosp) =>
    prosp.sep === '1' &&
    css`
      border-radius: 10px;
      border-top-right-radius: 0px;
      background: #b7c7fd;
      border: none;
    `}
  ${(props) =>
    props.sep === '3' &&
    css`
      border: none;
      color: white;
      font-family: 'SCDream6';
      font-size: 14px;
    `};
`;
