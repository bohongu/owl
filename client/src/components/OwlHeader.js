import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import owl from '../assets/owl.png';
import { themeActions } from '../store/theme';
import { ImArrowLeft } from 'react-icons/im';
import { startActions } from '../store/start';

const OwlHeader = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const start = useSelector((state) => state.start.start);
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {
    dispatch(themeActions.toggleDarkMode());
  };
  const handleChatFinish = () => {
    dispatch(startActions.setFinish());
  };

  return (
    <HeaderBlock>
      {start ? (
        <div>
          <ImArrowLeft onClick={handleChatFinish} />
        </div>
      ) : null}
      <img src={owl} alt="owl" />
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? '라잍' : '다크'}
      </button>
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
  div {
    height: 16px;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
  }
  img {
    height: 36px;
    width: 36px;
    background: none;
  }
`;
