import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';
import searchIcon from './search.png';
import starIcon from './star.png';
import helpIcon from './help.png';
import henrik from './henrik.jpg';
import timo from './timo.jpeg';
import TeamMemberItem, { TeamMember } from './TeamMemberItem';

type HowItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

const howItems: HowItem[] = [
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

const teamMembers: TeamMember[] = [
  {
    name: 'Henrik Raitasola',
    title: 'CTO & Founder',
    description:
      'Olen tehnyt sitä sun tätä ja vähän kaikkee muuttakin. Vauhtiossa vastaan junnuista ja diipa daapa. Tähän kantsii kaikenlaista kirjoittaa',
    image: henrik,
  },
  {
    name: 'Timo Isoviita',
    title: 'CEO & Founder',
    description:
      'Olen tehnyt sitä sun tätä ja vähän kaikkee muuttakin. Vauhtiossa vastaan junnuista ja diipa daapa. Tähän kantsii kaikenlaista kirjoittaa',
    image: timo,
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Koti" />
    <header className="header">
      <h1>Tarvitsetko tulevaisuuden osaajat nyt?</h1>
      <p className="header__description">
        Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman
        koulutusohjelman kautta saada nuoria lupauksia Junior konsulteiksi
        IT-alalle.
      </p>
      <a href="mailto:myynti@vauhtio.com" className="header__cta">
        Ota yhteyttä
      </a>
    </header>

    <section className="what-is">
      <div className="container">
        <div className="what-is__content">
          <div className="loool">
            <div className="what-is__image" />
          </div>
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
        </div>
      </div>
    </section>

    <section className="how-it-works">
      <p className="section-header__subtitle">Näin me teemme sen</p>
      <h2 className="section-header">Miten homma toimii?</h2>
      <div className="container">
        <div className="how-items">
          {howItems.map(howItem => (
            <div className="how-item">
              <div className="how-item__icon-wrapper">
                <img
                  className="how-item__icon"
                  src={howItem.icon}
                  alt={howItem.iconAlt}
                />
              </div>
              <h3 className="how-item__title">{howItem.title}</h3>
              <p className="how-item__description">{howItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="benefits-section">
      <p className="section-header__subtitle">Mitä me tuomme pöytään?</p>
      <h2 className="section-header benefits__title">Näin hyödyt Vauhtiosta</h2>
      <div className="container">
        <div className="benefits">
          <div className="benefit">
            <h3 className="benefit__title">
              Säästä aikaa ja keskity ollennaiseen
            </h3>
            <p className="benefit__description">
              Kun Vauhtio hoitaa oikeiden devaajien etsimisen ja heidän
              kouluttamisen timanttiselle tasolle sinulla jää aikaan omaan
              liiketoimintaan.
            </p>
          </div>
          <div className="benefit">
            <h3 className="benefit__title">Kokeile ilman riskejä</h3>
            <p className="benefit__description">
              Koska devaajat ovat alussa konsultteina ei sinulla ole
              työnantajariskiä tms.
            </p>
          </div>
          <div className="benefit">
            <h3 className="benefit__title">Ulkoista koulutus</h3>
            <p className="benefit__description">
              Sinun ei tarvitse huolehtia oman koulutuksen tekemisestä, koska
              haluat keskittyä oman bisneksen kasvattamiseen.
            </p>
          </div>
          <div className="benefit">
            <h3 className="benefit__title">Mahdollisuus palkata devaaja</h3>
            <p className="benefit__description">
              Konsultointijakson lopussa sinä voit päättää haluatko jatkaa
              samaan malliin eteenpäin vai jopa palkata devaajan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="team-section">
      <p className="section-header__subtitle">Meidän kanssa onnistut</p>
      <h2 className="section-header">Huippu tiimi</h2>

      <div className="container">
        <div className="team">{teamMembers.map(TeamMemberItem)}</div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
