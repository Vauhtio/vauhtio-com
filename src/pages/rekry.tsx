import React from 'react';

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
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

const SecondPage = () => {
  const data = useStaticQuery<{
    desktop: { childImageSharp: { fluid: FluidObject } };
  }>(graphql`
    query {
      desktop: file(relativePath: { eq: "team2.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title="Rekry" />

      <PageHeader
        title="Tavoitteena työpaikka IT-alalla?"
        description="Olemme mentoroiva IT-konsulttitalo, jonka tavoitteena on oman koulutusohjelman kautta saada nuoria lupauksia konsulteiksi IT-alalle. Tule ohjelmaamme, jossa pääset oikeisiin koodausprojekteihin mahdollisimman nopeasti!"
        ctaText="Hae nyt"
        ctaEmail="rekry@vauhtio.com"
        backgroundImage={imageData}
      />

      <IntroductionSection />

      <TimelineSection />

      <WhoFitsSection />

      <TestimonialsSection />

      <ContactSection
        triangle={triangle}
        description="Hyvä homma! Lähetä meille sähköpostia, jossa kerrot vähän itsestäsi niin otetaan suhun yhteyttä ja laitetaan pyörät pyörimään."
        ctaEmail="rekry@vauhtio.com"
      />
    </Layout>
  );
};

export default SecondPage;
