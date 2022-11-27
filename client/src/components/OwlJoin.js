import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { startActions } from '../store/start';

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
          placeholder="Enter Nickname"
          value={nickname}
          onChange={onNicknameChange}
        />
        <button onClick={handleGoRooms}>START</button>
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
    background: none;
    border: 1px solid #fce7d8;
    color: white;
    margin-bottom: 10px;
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
    top: 0;
    right: 5px;
    border: none;
    background: none;
    color: white;
    :hover {
      color: #fce7d8;
    }
  }
  div {
    color: red;
  }
`;
