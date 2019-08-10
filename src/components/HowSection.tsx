import React from 'react';

import searchIcon from '../pages/search.png';
import starIcon from '../pages/star.png';
import helpIcon from '../pages/help.png';
import styled from 'styled-components';
import HowItem, { HowSectionItem } from './HowItem';

const howItems: HowSectionItem[] = [
  {
    title: 'Seulomme devaajat puolestasi',
    description:
      'Etsimme parhaat devaajat haastattelemalla ja testaamalla, jotta sinun ei tarvitse käyttää aikaasi siihen vaan voit keskittyä oman liiketoiminnan kasvattamiseen!',
    icon: searchIcon,
    iconAlt: 'Magnifying glass',
  },
  {
    title: 'Kuolutamme devaajat puolestasi',
    description:
      'Vauhtion Onboarding ohjelmaan valitut käyvät läpi timanttisen koulutuksen, jossa devaajista puristetaan täysiverisiä osaajia. Tarvittaessa Onboarding voidaan räätälöidä sinun projektisi teknologioilla ja käytännöillä.',
    icon: starIcon,
    iconAlt: 'Star',
  },
  {
    title: 'Tuemme devaajaa projektissasi',
    description:
      'Kun devaaja on projektissasi työskentelemässä Vauhtio on edelleen tukemassa häntä, jos tarvetta on.',
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
      <p className="section-header__subtitle">Näin me teemme sen</p>
      <h2 className="section-header">Miten homma toimii?</h2>
      <div className="container">
        <Items>{howItems.map(HowItem)}</Items>
      </div>
    </section>
  );
};

export default HowSection;
