import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal';
import { ImArrowLeft } from 'react-icons/im';
import { startActions } from '../store/start';
import { adminActions } from '../store/admin';
import OwlRoom from './OwlRoom';
import { MdOutlineSensorDoor } from 'react-icons/md';

const OwlRooms = () => {
  const socket = useSelector((state) => state.socket.socket);
  const [roomName, setRoomName] = useState('');
  const [error, setError] = useState('');
  const showModal = useSelector((state) => state.modal.showModal);
  const roomList = useSelector((state) => state.admin.roomList);
  const dispatch = useDispatch();

  const handleModalShow = () => {
    dispatch(modalActions.setShowModal());
  };

  const handleModalHide = () => {
    dispatch(modalActions.setHideModal());
    setRoomName('');
    setError('');
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleCreateRoom = () => {
    socket.emit('create_room', roomName, () => {
      setRoomName('');
      dispatch(startActions.goChat());
      dispatch(adminActions.setRoomTitle(roomName));
    });
  };

  socket.on('roomName_null', (data) => {
    setError(data);
  });

  socket.on('roomName_same', (data) => {
    setError(data);
  });

  useEffect(() => {
    socket.on('room_list', (rooms) => {
      dispatch(adminActions.clearRoomList());
      if (rooms.length === 0) {
        return;
      }
      for (let i = 0; i < rooms.length; i++) {
        dispatch(adminActions.setRoomList(rooms[i]));
      }
    });
  }, [dispatch, socket]);

  return (
    <RoomsBlock>
      <CreateRoom>
        <Create onClick={handleModalShow}>
          CREATE ROOM&nbsp;
          <MdOutlineSensorDoor />
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
            <div
              style={{
                color: 'red',
                marginTop: '10px',
                fontFamily: 'SCDream3',
                fontSize: '12px',
              }}
            >
              {error}
            </div>
          </Modal>
        ) : null}
      </CreateRoom>
      <RoomList>
        {roomList.length === 0 && (
          <>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <NoRoom>채팅방을 만들어주세요</NoRoom>
            <div></div>
            <div></div>
          </>
        )}
        {roomList.map((item) => (
          <OwlRoom roomName={item} key={item}>
            {item}
          </OwlRoom>
        ))}
      </RoomList>
    </RoomsBlock>
  );
};

export default OwlRooms;

const RoomsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
  height: 600px;
`;

const CreateRoom = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  margin-bottom: 40px;
`;

const Create = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 28px;
  color: white;
  background: #b8c7ff;
  width: 100%;
  border-radius: 15px;
  font-family: BMJUA;
  font-weight: 600;
  :hover {
    color: #e7fee6;
  }
`;

const RoomList = styled.div`
  height: 600px;
  width: 412px;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  gap: 7px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
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
  color: #b8c7ff;
  :hover {
    color: #4c6efe;
  }
`;

const HeaderTitle = styled.div`
  border-bottom: 1px solid #4c6efe;
  font-weight: bold;
  font-family: BMJUA;
  display: flex;
  align-items: center;
  color: #4c6efe;
`;

const Label = styled.label`
  position: relative;
  input {
    height: 30px;
    width: 300px;
    padding: 0 15px;
    border: 2px solid #b8c7ff;
    background: none;
    ::placeholder {
      color: #b8c7ff;
    }
    :focus {
      outline: none;
      ::placeholder {
        color: #b8c7ff;
        font-weight: bold;
      }
    }
  }
  button {
    height: 30px;
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    background: none;
    color: #4c6efe;
    :hover {
      color: #4c6efe;
      font-weight: bold;
    }
  }
`;

const NoRoom = styled.div`
  text-align: center;
  color: red;
  font-size: 22px;
  font-family: GangwonEdu_OTFBoldA;
`;
