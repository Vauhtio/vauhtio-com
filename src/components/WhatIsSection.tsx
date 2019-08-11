import React from 'react';
import styled from 'styled-components';

import whatIsVauhtio from '../pages/what-is-vauhtio.jpeg';

const WhatIsSection = () => {
  return (
    <section className="what-is">
      <div className="container">
        <Content>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <div>
            <p>Mikä on Vauhtio?</p>
            <h2>Me autamme yritystäsi saamaan kovia tekijöitä!</h2>
            <p>
              Miten lähestyä työnantajia? Kuinka olla vakuuttava
              työhaastattelussa? Entä mitä tapahtuu työhaastattelun jälkeen?
              Mitä minulta odotetaan, olenko tarpeeksi hyvä?
            </p>
            <p>Me täällä Vauhtiolla tunnistetaan sun ongelma!</p>
            <p>
              Usein juuri ensimmäisen työpaikan saaminen on haasteellista kun
              kokemusta tai näyttöjä ei ole juuri kertynyt.
            </p>
          </div>
        </Content>
      </div>
    </section>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 64px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 96px;
  }
`;

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #edecfe 0%, #d2cffc 100%);
  border-radius: 4px;
  position: relative;
  height: 200px;
  width: 200px;
  margin-bottom: 64px;

  @media (min-width: 576px) {
    width: 100%;
    height: 212px;
  }

  @media (min-width: 768px) {
    height: 365px;
  }
`;

const Image = styled.div`
  position: absolute;
  left: 24px;
  top: 24px;
  width: 100%;
  height: 100%;
  background: url(${whatIsVauhtio});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: scaleX(-1);
`;

export default WhatIsSection;
