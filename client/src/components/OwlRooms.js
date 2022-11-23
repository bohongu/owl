import React from 'react';
import styled from 'styled-components';

const OwlRooms = () => {
  return (
    <RoomsBlock>
      <CreateRoom>
        <button>방만들기</button>
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
