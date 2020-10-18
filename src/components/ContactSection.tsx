import React from 'react';

import envelope from '../images/envelope.png';
import styled from 'styled-components';
import Footer from './Footer';

const ctaEmail = 'timo.isoviita@vauhtio.com';

type Props = {
  triangle: string;
  description: string;
  onRef: React.MutableRefObject<HTMLDivElement | null>;
};

const ContactSection = (props: Props) => {
  return (
    <Container>
      <div className="container" ref={props.onRef}>
        <Triangle src={props.triangle} alt="Overlay" />
        <Card>
          <Title>Kiinnostuitko?</Title>
          <Description>{props.description}</Description>
          <CtaLink href={`mailto:${ctaEmail}`}>
            <Envelope src={envelope} alt="Envelope" />
            {ctaEmail}
          </CtaLink>
        </Card>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.section`
  background: linear-gradient(90deg, #6c63ff 0%, #4a90e2 100%);
  padding: 80px 0;
  position: relative;
`;

const Title = styled.h2``;

const Card = styled.div`
  background: #ffffff;
  border-radius: 4px;
  max-width: 568px;
  margin: 0 auto;
  text-align: center;
  padding: 48px 32px;
  box-shadow: 0px 0px 47px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Triangle = styled.img`
  position: absolute;
  top: -1px;
  left: 0px;
  width: 100%;
`;

const Envelope = styled.img`
  width: 32px;
  margin-right: 8px;
  margin-bottom: 0;
`;

const Description = styled.p`
  max-width: 400px;
  margin: 16px auto 0;
  color: #5d5c75;
`;

const CtaLink = styled.a`
  margin-top: 32px;
  display: inline-block;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #302f3c;
  font-family: lato;
`;

export default ContactSection;
