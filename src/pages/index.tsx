import React, { useRef } from 'react';

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

const IndexPage = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const data = useImage();
  const imageData = data.team.childImageSharp.fluid;

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <Layout>
      <SEO title="Koti" />

      <PageHeader
        title="Tarvitsetko tulevaisuuden osaajat nyt?"
        description="Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman koulutusohjelman kautta saada nuoria lupauksia Junior-devaajiksi IT-alalle."
        ctaText="Ota yhteyttä"
        onCtaPress={scrollToContact}
        backgroundImage={imageData}
      />

      <WhatIsSection />

      <HowSection />

      <BenefitsSection />

      <TeamSection />

      <ContactSection
        triangle={triangle}
        description="Hyvä homma! Lähetä meille sähköpostia ja kerro tarpeistasi niin olemme yhteydessä!"
        onRef={contactRef}
      />
    </Layout>
  );
};

export default IndexPage;
