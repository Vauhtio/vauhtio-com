import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import team from '../pages/team2.jpeg';
import IntroductionSection from '../components/IntroductionSection';
import './rekry.css';

const SecondPage = () => (
  <Layout>
    <SEO title="Rekry" />

    <PageHeader
      title="Tavoitteena työpaikka IT-alalla?"
      description="Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman koulutusohjelman kautta saada nuoria lupauksia konsulteiksi IT-alalle. Tule ohjelmaamme, jossa pääset oikeisiin koodausprojekteihin mahdollisimman nopeasti!"
      ctaText="Hae nyt"
      ctaEmail="rekry@vauhtio.com"
      backgroundImage={team}
    />

    <IntroductionSection />
  </Layout>
);

export default SecondPage;
