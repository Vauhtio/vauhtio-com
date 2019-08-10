import React from 'react';
import TeamMemberItem, { TeamMember } from './TeamMemberItem';

import henrik from '../pages/henrik.jpg';
import timo from '../pages/timo.jpeg';
import styled from 'styled-components';

const teamMembers: TeamMember[] = [
  {
    name: 'Henrik Raitasola',
    title: 'CTO & Founder',
    description:
      'Olen tehnyt sitä sun tätä ja vähän kaikkee muuttakin. Vauhtiossa vastaan junnuista ja diipa daapa. Tähän kantsii kaikenlaista kirjoittaa',
    image: henrik,
  },
  {
    name: 'Timo Isoviita',
    title: 'CEO & Founder',
    description:
      'Olen tehnyt sitä sun tätä ja vähän kaikkee muuttakin. Vauhtiossa vastaan junnuista ja diipa daapa. Tähän kantsii kaikenlaista kirjoittaa',
    image: timo,
  },
];

const TeamMembers = styled.div`
  margin-top: 64px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-gap: 96px;
    justify-content: center;
  }
`;

const TeamSection = () => {
  return (
    <section className="team-section">
      <p className="section-header__subtitle">Meidän kanssa onnistut</p>
      <h2 className="section-header">Huippu tiimi</h2>

      <div className="container">
        <TeamMembers>{teamMembers.map(TeamMemberItem)}</TeamMembers>
      </div>
    </section>
  );
};

export default TeamSection;
