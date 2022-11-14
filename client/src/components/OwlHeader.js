import React from 'react';
import styled from 'styled-components';
import owl from '../assets/owl.png';

const OwlHeader = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <HeaderBlock>
      <h1>{today}</h1>
      <img src={owl} alt="owl" />
      <h1>{today}</h1>
    </HeaderBlock>
  );
};

export default OwlHeader;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px;
  background: white;
  h1 {
    font-size: 14px;
  }
  h1:last-child {
    visibility: hidden;
  }
  img {
    height: 36px;
    width: 36px;
    background: none;
  }
`;
