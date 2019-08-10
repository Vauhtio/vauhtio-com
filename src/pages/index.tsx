import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';

import TeamSection from '../components/TeamSection';
import HowSection from '../components/HowSection';

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

    <HowSection />

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

    <TeamSection />
  </Layout>
);

export default IndexPage;
