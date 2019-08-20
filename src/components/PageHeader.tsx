import React from 'react';
import styled from 'styled-components';

import team from '../pages/team.jpeg';

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaEmail: string;
  backgroundImage: string;
};

const PageHeader = (props: Props) => {
  return (
    <Container backgroundImageUrl={props.backgroundImage}>
      <Header>{props.title}</Header>
      <p className="header__description">{props.description}</p>
      <a href={`mailto:${props.ctaEmail}`} className="header__cta">
        {props.ctaText}
      </a>
    </Container>
  );
};

const Container = styled.header<{ backgroundImageUrl: string }>`
  height: 80vh;

  background-image: linear-gradient(
      317.71deg,
      #3e249e 0.68%,
      rgba(159, 153, 250, 0.5) 99.1%
    ),
    url(${props => props.backgroundImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  padding: 0 16px;

  @media (min-width: 576px) {
    height: 560px;
  }
`;

const Header = styled.h1`
  font-size: 28px;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 40px;
  }
`;

export default PageHeader;
