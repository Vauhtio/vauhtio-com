import React, { useRef } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import IntroductionSection from '../components/RekryPage/IntroductionSection';
import './rekry.css';
import TimelineSection from '../components/RekryPage/TimelineSection';
import WhoFitsSection from '../components/RekryPage/WhoFitsSection';
import TestimonialsSection from '../components/RekryPage/TestimonialsSection';
import ContactSection from '../components/ContactSection';

import triangle from '../images/triangle-grey.svg';
import { useImage } from '../hooks/useImage';

const SecondPage = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const data = useImage();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  };
  
  return (
    <Layout>
      <SEO title="Rekry" />

      <PageHeader
        title="Tavoitteena työpaikka IT-alalla?"
        description="Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman koulutusohjelman kautta saada nuoria lupauksia konsulteiksi IT-alalle. Tule ohjelmaamme, jossa pääset oikeisiin koodausprojekteihin mahdollisimman nopeasti!"
        ctaText="Hae nyt"
        onCtaPress={scrollToContact}
        backgroundImage={data.team2.childImageSharp.fluid}
      />

      <IntroductionSection />

      <TimelineSection />

      <WhoFitsSection />

      <TestimonialsSection />

      <ContactSection
        triangle={triangle}
        description="Hyvä homma! Lähetä meille sähköpostia, jossa kerrot vähän itsestäsi niin otetaan suhun yhteyttä ja laitetaan pyörät pyörimään."
        ctaEmail="rekry@vauhtio.com"
        onRef={contactRef}
      />
    </Layout>
  );
};

export default SecondPage;
