import React from 'react';
import styled from 'styled-components';

import whatIsVauhtio from '../../images/what-is-vauhtio.jpeg';

const WhatIsSection = () => {
  return (
    <Section>
      <div className="container">
        <Content>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <div>
            <LineContainer>
              <Line />
              <div>Mikä on Vauhtio?</div>
            </LineContainer>
            <h2>Me autamme yritystäsi saamaan lupaavia tekijöitä!</h2>
            <p>
              Vauhtion tavoitteena on auttaa työnantajia löytämään lahjakkuudet
              ja madaltaa kynnystä kokeilla junior-kehittäjän kanssa
              työskentelemistä.
            </p>
            <p>
              Vauhtiin päästään ilman työnantajariskiä ja kun siivet kantaa,
              yhteinen tavoitteemme on rekrytointi yritykseenne.
            </p>
          </div>
        </Content>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 48px 0;

  @media (min-width: 768px) {
    padding: 96px 0;
  }
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Line = styled.div`
  height: 2px;
  width: 48px;
  background: #6c63ff;
  margin-right: 16px;
`;

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
