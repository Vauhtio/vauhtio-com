import React from 'react';
import styled from 'styled-components';

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: 'Säästä aikaa ja keskity ollennaiseen',
    description:
      'Kun Vauhtio hoitaa oikeiden devaajien etsimisen ja heidän kouluttamisen timanttiselle tasolle sinulla jää aikaan omaan liiketoimintaan.',
  },
  {
    title: 'Kokeile ilman riskejä',
    description:
      'Koska devaajat ovat alussa konsultteina ei sinulla ole työnantajariskiä tms.',
  },
  {
    title: 'Ulkoista koulutus',
    description:
      'Sinun ei tarvitse huolehtia oman koulutuksen tekemisestä, koska haluat keskittyä oman bisneksen kasvattamiseen.',
  },
  {
    title: 'Mahdollisuus palkata devaaja',
    description:
      'Konsultointijakson lopussa sinä voit päättää haluatko jatkaa samaan malliin eteenpäin vai jopa palkata devaajan.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <p className="section-header__subtitle">Mitä me tuomme pöytään?</p>
      <h2 className="section-header benefits__title">Näin hyödyt Vauhtiosta</h2>
      <div className="container">
        <Benefits>
          {benefits.map(benefit => (
            <div className="benefit">
              <h3 className="benefit__title">{benefit.title}</h3>
              <p className="benefit__description">{benefit.description}</p>
            </div>
          ))}
        </Benefits>
      </div>
    </section>
  );
};

const Benefits = styled.div`
  display: grid;
  grid-row-gap: 16px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media (min-width: 768px) {
    grid-column-gap: 64px;
  }
`;

export default BenefitsSection;
