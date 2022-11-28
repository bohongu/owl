import React from 'react';
import { AiFillSmile } from 'react-icons/ai';
import styled from 'styled-components';
import cuteOwl from '../assets/cuteOwl.png';

const OwlIntro = () => {
  return (
    <IntroBlock>
      <h1>
        <AiFillSmile style={{ fontSize: '70px' }} />
        WL
      </h1>
      <img src={cuteOwl} alt="cuteOwl" />
      <p>닉네임을 입력하고 채팅을 즐기세요</p>
    </IntroBlock>
  );
};

export default OwlIntro;

const IntroBlock = styled.div`
  margin: 60px 20px 0px 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h1 {
    font-family: SCDream9;
    font-size: 55px;
    color: #608cfe;
    display: flex;
    border-bottom: 2px solid #608cfe;
  }
  p {
    font-size: 16px;
    text-align: center;
    font-family: SCDream3;
    color: #7b9dff;
    margin-top: 60px;
  }
  img {
    height: 280px;
    width: 350px;
  }
`;
