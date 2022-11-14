import React from 'react';
import styled from 'styled-components';

const OwlJoin = () => {
  return (
    <JoinBlock>
      <label>
        <input type="text" placeholder="Enter Nickname" />
        <button>START</button>
      </label>
      <div>이미 사용 중인 닉네임 입니다</div>
    </JoinBlock>
  );
};

export default OwlJoin;

const JoinBlock = styled.div`
  margin-bottom: 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    position: relative;
  }
  input {
    height: 45px;
    width: 330px;
    padding: 0 15px;
    border: none;
    background: none;
    border: 1px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    margin-bottom: 10px;
    ::placeholder {
      color: ${(props) => props.theme.textColor};
    }
  }

  button {
    height: 45px;
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    background: none;
    color: ${(props) => props.theme.textColor};
  }
  div {
    color: red;
  }
`;
