import React from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { adminActions } from '../store/admin';
import { startActions } from '../store/start';

const socket = io.connect('http://localhost:3001');

const OwlRoom = ({ children, roomName }) => {
  const dispatch = useDispatch();

  const enterRoom = () => {
    socket.emit('enter_room', roomName, () => {
      dispatch(startActions.goChat());
      dispatch(adminActions.setRoomTitle(roomName));
    });
  };

  return <RoomCard onClick={enterRoom}>{children}</RoomCard>;
};

export default OwlRoom;

const RoomCard = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: white;
  cursor: pointer;
`;
