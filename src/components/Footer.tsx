import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Container>© Vauhtio Solutions {new Date().getFullYear()}</Container>;
};

const Container = styled.footer`
  text-align: center;
  padding: 16px;
  color: #ffffff;
  font-size: 14px;
`;

export default Footer;
