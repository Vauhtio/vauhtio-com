import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';

import TeamSection from '../components/IndexPage/TeamSection';
import HowSection from '../components/IndexPage/HowSection';
import BenefitsSection from '../components/IndexPage/BenefitsSection';
import WhatIsSection from '../components/IndexPage/WhatIsSection';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';
import triangle from '../images/triangle.svg';
import { useImage } from '../hooks/useImage';

const ctaEmail = 'timo.isoviita@vauhtio.com';

const IndexPage = () => {
  const data = useImage();
  const imageData = data.team.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title="Koti" />

      <PageHeader
        title="Tarvitsetko tulevaisuuden osaajat nyt?"
        description="Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman koulutusohjelman kautta saada nuoria lupauksia Junior-devaajiksi IT-alalle."
        ctaText="Ota yhteyttä"
        ctaEmail={ctaEmail}
        backgroundImage={imageData}
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
};

export default IndexPage;
