import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import owl from '../assets/owl.png';
import { ImArrowLeft } from 'react-icons/im';
import { startActions } from '../store/start';

const OwlHeader = () => {
  const start = useSelector((state) => state.start.start);
  const dispatch = useDispatch();
  const handleGoJoin = () => {
    dispatch(startActions.goJoin());
  };

  return (
    <HeaderBlock>
      {start ? (
        <>
          <div>
            <ImArrowLeft onClick={handleGoJoin} style={{ cursor: 'pointer' }} />
          </div>
          <img src={owl} alt="owl" />
          <div></div>
        </>
      ) : (
        <img src={owl} alt="owl" />
      )}
    </HeaderBlock>
  );
};

export default OwlHeader;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  background: white;
  div {
    display: flex;
    align-items: center;
    width: 500px;
    height: 16px;
    color: black;
  }
  img {
    height: 36px;
    width: 36px;
    background: none;
  }
`;
