import React from 'react';

import searchIcon from '../pages/search.png';
import starIcon from '../pages/star.png';
import helpIcon from '../pages/help.png';
import styled from 'styled-components';
import HowItem, { HowSectionItem } from './HowItem';
import Subheader from './Subheader';

const howItems: HowSectionItem[] = [
  {
    title: 'Seulomme kehittäjät puolestasi',
    description:
      'Etsimme kehittäjät haastattelemalla ja testaamalla, jotta sinun ei tarvitse käyttää aikaasi siihen vaan voit keskittyä oman liiketoiminnan kasvattamiseen!',
    icon: searchIcon,
    iconAlt: 'Magnifying glass',
  },
  {
    title: 'Koulutamme ammattilaisia',
    description:
      'Vauhtion Onboarding ohjelmaan valitut käyvät läpi timanttisen koulutuksen, jossa opiskelijoista puristetaan ammattiuran ensimmäistä askelta ottavia junior kehittäjiä. Tarvittaessa Onboarding voidaan räätälöidä sinun projektisi teknologioilla ja käytännöillä.',
    icon: starIcon,
    iconAlt: 'Star',
  },
  {
    title: 'Tuemme kehittäjää projektissasi',
    description:
      'Kun kehittäjä on projektissasi työskentelemässä Vauhtio on edelleen tukemassa häntä, jos tarvetta on.',
    icon: helpIcon,
    iconAlt: 'Lifebelt',
  },
];

const Items = styled.div`
  margin-top: 64px;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
  }

  @media (min-width: 768px) {
    grid-gap: 64px;
  }
`;

const HowSection = () => {
  return (
    <section className="how-it-works">
      <Subheader>Näin me teemme sen</Subheader>
      <h2 className="section-header">Miten homma toimii?</h2>
      <div className="container">
        <Items>{howItems.map(HowItem)}</Items>
      </div>
    </section>
  );
};

export default HowSection;
