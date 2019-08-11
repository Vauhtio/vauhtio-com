import React from 'react';
import styled from 'styled-components';

const HomeHeader = () => {
  return (
    <header className="header">
      <Header>Tarvitsetko tulevaisuuden osaajat nyt?</Header>
      <p className="header__description">
        Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman
        koulutusohjelman kautta saada nuoria lupauksia Junior konsulteiksi
        IT-alalle.
      </p>
      <a href="mailto:myynti@vauhtio.com" className="header__cta">
        Ota yhteyttä
      </a>
    </header>
  );
};

const Header = styled.h1`
  font-size: 28px;

  @media (min-width: 576px) {
    font-size: 40px;
  }
`;

export default HomeHeader;
