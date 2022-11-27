import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';

const OwlTemplate = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default OwlTemplate;

const TemplateBlock = styled.div`
  height: 768px;
  width: 512px;
  position: relative;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  ::after {
    height: 768px;
    width: 512px;
    content: '';
    background-image: url(${background});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.15;
  }
`;
