import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './home.css';

import TeamSection from '../components/TeamSection';
import HowSection from '../components/HowSection';
import BenefitsSection from '../components/BenefitsSection';
import WhatIsSection from '../components/WhatIsSection';
import HomeHeader from '../components/HomeHeader';
import ContactSection from '../components/ContactSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Koti" />

    <HomeHeader />

    <WhatIsSection />

    <HowSection />

    <BenefitsSection />

    <TeamSection />

    <ContactSection />
  </Layout>
);

export default IndexPage;
