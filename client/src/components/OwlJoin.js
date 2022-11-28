import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { startActions } from '../store/start';
import { IoIosMail } from 'react-icons/io';

const OwlJoin = () => {
  const socket = useSelector((state) => state.socket.socket);
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleGoRooms = () => {
    socket.emit('nickname', nickname, () => {
      localStorage.setItem('nickname', nickname);
      setNickname('');
      dispatch(startActions.goRoom());
    });
  };

  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGoRooms();
    }
  };

  socket.on('nickname_null', (data) => {
    setError(data);
  });

  socket.on('nickname_same', (data) => {
    setError(data);
  });

  return (
    <JoinBlock>
      <label>
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={onNicknameChange}
          onKeyPress={handleOnKeyPress}
        />
        <button onClick={handleGoRooms}>
          <IoIosMail style={{ fontSize: '30px' }} />
        </button>
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
    border-radius: 12px;
    background: #b8c7ff;
    border: 1px solid #b8c7ff;
    color: white;
    margin-bottom: 10px;
    font-family: 'SCDream3';
    :focus {
      outline: none;
      ::placeholder {
        color: #608cfe;
      }
    }

    ::placeholder {
      color: white;
      font-family: 'SCDream3';
    }
  }

  button {
    display: flex;
    align-items: center;
    height: 45px;
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    background: none;
    color: white;
    font-family: 'SCDream3';
    :hover {
      color: #608cfe;
    }
  }
  div {
    color: red;
    font-family: SCDream3;
    font-size: 12px;
  }
`;
