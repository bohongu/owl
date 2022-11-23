import React from 'react';
import styled from 'styled-components';
import Modal from './ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal';

const OwlRooms = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();

  const handleModalShow = () => {
    dispatch(modalActions.setShowModal());
  };

  return (
    <RoomsBlock>
      <CreateRoom>
        <button onClick={handleModalShow}>방만들기</button>
        {showModal ? (
          <Modal>
            <RoomNameInput type="text" required />
            <CreateButton>✔</CreateButton>
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
  border: 1px solid red;
  margin: 55px 50px;
  height: 600px;
`;

const CreateRoom = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
`;

const RoomList = styled.div`
  border: 1px solid blue;
  height: 650px;
`;

const RoomNameInput = styled.input`
  height: 30px;
  width: 250px;
  margin-right: 10px;
  padding-left: 10px;
`;

const CreateButton = styled.button`
  height: 30px;
`;
