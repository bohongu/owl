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
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-family: SCDream6;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  background-color: aliceblue;
  color: #608cfe;
  :hover {
    letter-spacing: 2px;
    transform: scale(1.1);
    cursor: pointer;
  }
  :active {
    transform: scale(1.2);
  }
`;
