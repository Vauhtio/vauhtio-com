import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FluidObject } from 'gatsby-image';

import TeamMemberItem, { TeamMember } from './TeamMemberItem';
import Subheader from '../Subheader';

const TeamSection = () => {
  const henrik = useStaticQuery<{
    desktop: { childImageSharp: { fluid: FluidObject } };
    testi: { childImageSharp: { fluid: FluidObject } };
  }>(graphql`
    query {
      desktop: file(relativePath: { eq: "henrik.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      testi: file(relativePath: { eq: "timo.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const teamMembers: TeamMember[] = [
    {
      name: 'Timo Isoviita',
      title: 'CEO & Founder',
      description:
        'Vauhtioon etsin sellaisia ihmisiä, kenen kanssa itse haluaisin työskennellä. Näkemyksessä auttaa yli kymmenen vuoden kokemus kehittäjän tehtävistä. Vauhtiossa vastaan liiketoiminnasta, taloudesta ja asiakkuuksista. ',
      image: henrik.testi.childImageSharp.fluid,
    },
    {
      name: 'Henrik Raitasola',
      title: 'CTO & Founder',
      description:
        'Vauhtiossa autan kehittäjiämme pääsemään maksimaaliseen osaamiseen niin lyhyessä ajassa kuin mahdollista. Viiden vuoden kehittäjän kokemuksellani pystyn auttamaan sinun yritystäsi samaan projektiisi sopivat kehittäjät.',
      image: henrik.desktop.childImageSharp.fluid,
    },
  ];
  return (
    <section className="team-section">
      <Subheader>Meidän kanssa onnistut</Subheader>
      <h2 className="section-header">Huipputiimi</h2>

      <div className="container">
        <TeamMembers>
          {teamMembers.map((teamMember, index) => (
            <TeamMemberItem teamMember={teamMember} key={index} />
          ))}
        </TeamMembers>
      </div>
    </section>
  );
};

const TeamMembers = styled.div`
  margin-top: 64px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-gap: 96px;
    justify-content: center;
  }
`;

export default TeamSection;
