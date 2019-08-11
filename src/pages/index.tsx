import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';

import TeamSection from '../components/TeamSection';
import HowSection from '../components/HowSection';
import BenefitsSection from '../components/BenefitsSection';
import WhatIsSection from '../components/WhatIsSection';

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

    <WhatIsSection />

    <HowSection />

    <BenefitsSection />

    <TeamSection />
  </Layout>
);

export default IndexPage;
