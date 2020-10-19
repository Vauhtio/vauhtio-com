import React from 'react';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';
import { FluidObject } from 'gatsby-image';

type Props = {
  title: string;
  description: string;
  ctaText: string;
  onCtaPress(): void;
  backgroundImage: FluidObject;
};

const JustPageHeader: React.FC<{
  className?: string;
  background: FluidObject;
}> = props => {
  return (
    <BackgroundImage
      Tag="header"
      className={props.className}
      fluid={[
        'linear-gradient(317.71deg, #3e249e 0.68%, rgba(159, 153, 250, 0.5) 99.1%)',
        props.background,
      ]}
      backgroundColor={`#040e18`}
    >
      {props.children}
    </BackgroundImage>
  );
};

const PageHeader = (props: Props) => {
  return (
    <Container background={props.backgroundImage}>
      <Header>{props.title}</Header>
      <p className="header__description">{props.description}</p>
      <button onClick={props.onCtaPress} className="header__cta">
        {props.ctaText}
      </button>
    </Container>
  );
};

const Container = styled(JustPageHeader)`
  height: 80vh;

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
  color: #ffffff;

  @media (min-width: 576px) {
    font-size: 40px;
  }
`;

export default PageHeader;
