import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import owl from '../assets/owl.png';
import { themeActions } from '../store/theme';

const OwlHeader = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const toggleDarkModeHandler = () => {
    dispatch(themeActions.toggleDarkMode());
  };

  return (
    <HeaderBlock>
      <img src={owl} alt="owl" />
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

  img {
    height: 36px;
    width: 36px;
    background: none;
  }
`;
