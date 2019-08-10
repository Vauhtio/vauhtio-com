import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <h1>Tarvitseko tulevaisuuden osaajat nyt?</h1>
      <p>
        Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman
        koulutusohjelman kautta saada nuoria lupauksia Junior konsulteiksi
        IT-alalle.
      </p>
      <a href="mailto:myynti@vauhtio.com">Ota yhteyttä</a>
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
        <div className="how-item">
          <h3>Seulomme devaajat puolestasi</h3>
          <p>Etsimme parhaat devaajat haastattelemalla ja testaamalla, jotta sinun ei tarvitse käyttää aikaasi siihen vaan voit keskittyä oman liiketoiminnan kasvattamiseen!</p>
        </div>
        <div className="how-item">
          <h3>Kuolutamme devaajat puolestasi</h3>
          <p>Vauhtion Onboarding ohjelmaan valitut käyvät läpi timanttisen koulutuksen, jossa devaajista puristetaan täysiverisiä osaajia. Tarvittaessa Onboarding voidaan räätälöidä sinun projektisi teknologioilla ja käytännöillä.</p>
        </div>
        <div className="how-item">
          <h3>Tuemme devaajaa projektissasi</h3>
          <p>Kun devaaja on projektissasi työskentelemässä Vauhtio on edelleen tukemassa häntä, jos tarvetta on.</p>
        </div>
      </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
