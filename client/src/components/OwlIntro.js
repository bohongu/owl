import React from 'react';
import styled from 'styled-components';

const OwlIntro = () => {
  return (
    <IntroBlock>
      <h1>Talk to Stranger</h1>
      <p>Hope you enjoy chatting with random strangers!</p>
      <p>
        Please note that if you impersonate someone else, you may be subject to
        separate legal sanctions.
      </p>
      <p>Enter your nickname and enjoy chatting</p>
    </IntroBlock>
  );
};

export default OwlIntro;

const IntroBlock = styled.div`
  margin: 110px 20px 80px 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    font-family: 'BMJUA';
    color: #e7fee6;
    :hover {
      color: #fce7d8;
    }
  }
  p {
    font-size: 18px;
    text-align: center;
    font-family: 'Ansungtangmyun';
    color: #fce7d8;
    :hover {
      color: #e7fee6;
    }
  }
`;
