import React from 'react';
import styled from 'styled-components';

const OwlRoom = ({ children }) => {
  return <RoomCard>{children}</RoomCard>;
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
