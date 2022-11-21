import React from 'react';
import styled from 'styled-components';
import OwlChatInput from './OwlChatInput';

const OwlChat = () => {
  return (
    <>
      <ChatBlock></ChatBlock>
      <OwlChatInput />
    </>
  );
};

export default OwlChat;

const ChatBlock = styled.div`
  margin: 10px;
  height: 620px;
  background: ${(props) => props.theme.bgColor};
`;
