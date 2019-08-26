import React from 'react';
import styled from 'styled-components';

import timer from '../../pages/timer.png';
import check from '../../pages/check.png';
import exporting from '../../pages/exporting.png';
import file from '../../pages/file.png';
import ellipse from '../../pages/ellipse.png';
import Subheader from '../Subheader';

type Benefit = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

const benefits: Benefit[] = [
  {
    title: 'Säästä aikaa ja keskity ollennaiseen',
    description:
      'Kun Vauhtio hoitaa lupaavien kehittäjien etsimisen ja heidän alustavan kouluttamisen jää sinulle aikaa omaan liiketoimintaan.',
    icon: timer,
    iconAlt: 'Timer clock',
  },
  {
    title: 'Kokeile ilman riskejä',
    description:
      'Koska kehittäjät ovat alussa konsultteina ei sinulla ole työnantajariskiä.',
    icon: check,
    iconAlt: 'Checkmark',
  },
  {
    title: 'Ulkoista koulutus',
    description:
      'Mahdollisuus räätälöidä onboarding tarkoittaa sitä, että voit keskittyä muihin tärkeisiin asioihin ja silti päästä nopeasti vauhtiin uusien tekijöiden kanssa.',
    icon: exporting,
    iconAlt: 'Arrow pointing out',
  },
  {
    title: 'Mahdollisuus rekrytoida',
    description:
      'Konsultointijakson lopussa sinä voit päättää haluatko palkata kehittäjän. Yhteistyön jatkaminen konsultointipohjalla on myös yksi mahdollisuus.  ',
    icon: file,
    iconAlt: 'Folder with files',
  },
];

const BenefitsSection = () => {
  return (
    <Section>
      <LeftEllipse src={ellipse} alt="Left ellipse graphic" />
      <RightEllipse src={ellipse} alt="Right ellipse graphic" />
      <Subtitle>Mitä Vauhtio tarjoaa?</Subtitle>
      <h2 className="section-header benefits__title">Näin hyödyt Vauhtiosta</h2>
      <div className="container">
        <Benefits>
          {benefits.map(benefit => (
            <Container>
              <Icon src={benefit.icon} alt={benefit.iconAlt} />
              <div>
                <Title>{benefit.title}</Title>
                <Description>{benefit.description}</Description>
              </div>
            </Container>
          ))}
        </Benefits>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: #5e55ec;
  position: relative;
  padding: 64px 0;

  @media (min-width: 992px) {
    padding: 64px 0 96px;
  }
`;

const Ellipse = styled.img`
  display: none;
  position: absolute;
  margin: 0;
  pointer-events: none;

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const LeftEllipse = styled(Ellipse)`
  left: 0;
  top: 0;
`;

const RightEllipse = styled(Ellipse)`
  right: 0;
  bottom: 0;
  transform: scaleX(-1) scaleY(-1);
`;

const Subtitle = styled(Subheader)`
  color: #c7f6ff;
`;

const Benefits = styled.div`
  display: grid;
  grid-row-gap: 16px;
  margin-top: 64px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media (min-width: 768px) {
    grid-column-gap: 64px;
  }
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 24px;
  display: flex;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
  margin-right: 16px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 18px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: #e6e5eb;
  margin: 0;
`;

export default BenefitsSection;
