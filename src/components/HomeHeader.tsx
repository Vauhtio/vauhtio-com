import React from 'react';
import styled from 'styled-components';

import team from '../pages/team.jpeg';

const HomeHeader = () => {
  return (
    <Container>
      <Header>Tarvitsetko tulevaisuuden osaajat nyt?</Header>
      <p className="header__description">
        Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman
        koulutusohjelman kautta saada nuoria lupauksia Junior konsulteiksi
        IT-alalle.
      </p>
      <a href="mailto:myynti@vauhtio.com" className="header__cta">
        Ota yhteyttä
      </a>
    </Container>
  );
};

const Container = styled.header`
  height: 80vh;

  background-image: linear-gradient(
      317.71deg,
      #3e249e 0.68%,
      rgba(159, 153, 250, 0.5) 99.1%
    ),
    url(${team});
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

export default HomeHeader;
