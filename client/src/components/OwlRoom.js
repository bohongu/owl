import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { adminActions } from '../store/admin';
import { startActions } from '../store/start';

const OwlRoom = ({ children, roomName }) => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);

  const enterRoom = () => {
    socket.emit('enter_room', roomName, () => {
      dispatch(adminActions.setRoomTitle(roomName));
      dispatch(startActions.goChat());
    });
  };

  return <RoomCard onClick={enterRoom}>{children}</RoomCard>;
};

export default OwlRoom;

const RoomCard = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #608cfe;
  font-family: 'SCDream6';
  color: white;
  cursor: pointer;
  :hover {
  }
`;
