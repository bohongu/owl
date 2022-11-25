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
      console.log(roomName);
    });
  };

  return <RoomCard onClick={enterRoom}>{children}</RoomCard>;
};

export default OwlRoom;

const RoomCard = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-image: linear-gradient(135deg, #e7fee6 0%, #fce7d8 100%);
  font-family: 'Humanbumsuk';
  color: black;
  cursor: pointer;
  :hover {
    border: 1.5px solid #87af3e;
  }
`;
