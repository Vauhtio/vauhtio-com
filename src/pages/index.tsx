import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';

import TeamSection from '../components/TeamSection';
import HowSection from '../components/HowSection';
import BenefitsSection from '../components/BenefitsSection';
import WhatIsSection from '../components/WhatIsSection';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';
import team from '../pages/team.jpeg';
import triangle from '../pages/triangle.svg';

const ctaEmail = 'timo.isoviita@vauhtio.com';

const IndexPage = () => (
  <Layout>
    <SEO title="Koti" />

    <PageHeader
      title="Tarvitsetko tulevaisuuden osaajat nyt?"
      description="Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman koulutusohjelman kautta saada nuoria lupauksia Junior-konsulteiksi IT-alalle."
      ctaText="Ota yhteyttä"
      ctaEmail={ctaEmail}
      backgroundImage={team}
    />

    <WhatIsSection />

    <HowSection />

    <BenefitsSection />

    <TeamSection />

    <ContactSection
      triangle={triangle}
      description="Hyvä homma! Lähetä meille sähköpostia ja kerro tarpeistasi niin olemme yhteydessä!"
      ctaEmail={ctaEmail}
    />
  </Layout>
);

export default IndexPage;
