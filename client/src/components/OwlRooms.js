import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal';
import { IoCreateOutline } from 'react-icons/io5';
import { ImArrowLeft } from 'react-icons/im';
import { io } from 'socket.io-client';
import { startActions } from '../store/start';

const socket = io.connect('http://localhost:3001');

const OwlRooms = () => {
  const [roomName, setRoomName] = useState('');
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();

  const handleModalShow = () => {
    dispatch(modalActions.setShowModal());
  };

  const handleModalHide = () => {
    dispatch(modalActions.setHideModal());
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleCreateRoom = () => {
    socket.emit('create_room', roomName);
    setRoomName('');
    dispatch(startActions.goChat());
  };

  return (
    <RoomsBlock>
      <CreateRoom>
        <Create onClick={handleModalShow}>
          <IoCreateOutline />
        </Create>
        {showModal ? (
          <Modal>
            <ModalHeader>
              <ExitArrow onClick={handleModalHide}>
                <ImArrowLeft style={{ cursor: 'pointer' }} />
              </ExitArrow>
              <HeaderTitle>CREATE ROOM</HeaderTitle>
              <ExitArrow></ExitArrow>
            </ModalHeader>
            <Label>
              <input
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={handleRoomNameChange}
              />
              <button onClick={handleCreateRoom}>CREATE</button>
            </Label>
          </Modal>
        ) : null}
      </CreateRoom>
      <RoomList>ff</RoomList>
    </RoomsBlock>
  );
};

export default OwlRooms;

const RoomsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 55px 50px;
  height: 600px;
`;

const CreateRoom = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
`;

const Create = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 25px;
  color: white;
  :hover {
    color: greenyellow;
  }
`;

const RoomList = styled.div`
  border: 1px solid blue;
  height: 650px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

const ExitArrow = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
`;

const HeaderTitle = styled.div`
  border-bottom: 1px solid black;
`;

const Label = styled.label`
  position: relative;
  input {
    height: 30px;
    width: 300px;
    padding: 0 15px;
    border: 1px solid black;
    background: none;
  }
  button {
    height: 30px;
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    background: none;
  }
`;
