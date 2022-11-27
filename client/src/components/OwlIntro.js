import React from 'react';
import styled from 'styled-components';

const OwlIntro = () => {
  return (
    <IntroBlock>
      <h1>OWL</h1>
      <p>임의의 낯선 사람과 채팅을 즐기시기 바랍니다!</p>
      <p>
        타인을 사칭하는 경우 별도의 법적 제재를
        <br /> 받을 수 있음을 알려드립니다.
      </p>
      <p>닉네임을 입력하고 채팅을 즐기세요</p>
    </IntroBlock>
  );
};

export default OwlIntro;

const IntroBlock = styled.div`
  margin: 90px 20px 30px 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h1 {
    font-family: 'SCDream9';
    font-size: 55px;
    color: #608cfe;
    :hover {
      color: #fce7d8;
    }
  }
  p {
    font-size: 18px;
    text-align: center;
    font-family: 'SCDream3';
    color: #7b9dff;
    :hover {
      color: #e7fee6;
    }
  }
`;
