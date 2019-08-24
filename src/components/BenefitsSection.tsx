import React from 'react';
import styled from 'styled-components';

import timer from '../pages/timer.png';
import check from '../pages/check.png';
import exporting from '../pages/exporting.png';
import file from '../pages/file.png';
import Subheader from './Subheader';

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
      'Kun Vauhtio hoitaa oikeiden devaajien etsimisen ja heidän kouluttamisen timanttiselle tasolle sinulla jää aikaan omaan liiketoimintaan.',
    icon: timer,
    iconAlt: 'Timer clock',
  },
  {
    title: 'Kokeile ilman riskejä',
    description:
      'Koska devaajat ovat alussa konsultteina ei sinulla ole työnantajariskiä tms.',
    icon: check,
    iconAlt: 'Checkmark',
  },
  {
    title: 'Ulkoista koulutus',
    description:
      'Sinun ei tarvitse huolehtia oman koulutuksen tekemisestä, koska haluat keskittyä oman bisneksen kasvattamiseen.',
    icon: exporting,
    iconAlt: 'Arrow pointing out',
  },
  {
    title: 'Mahdollisuus palkata devaaja',
    description:
      'Konsultointijakson lopussa sinä voit päättää haluatko jatkaa samaan malliin eteenpäin vai jopa palkata devaajan.',
    icon: file,
    iconAlt: 'Folder with files',
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <Subtitle>Mitä me tuomme pöytään?</Subtitle>
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
    </section>
  );
};

const Subtitle = styled(Subheader)`
  color: #b8f3ff;
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
