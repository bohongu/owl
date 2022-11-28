import React from 'react';
import styled from 'styled-components';

const OwlTemplate = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default OwlTemplate;

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: 768px;
  width: 512px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  background: white;
  border-radius: 20px;
`;
