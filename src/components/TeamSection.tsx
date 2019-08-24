import React from 'react';
import TeamMemberItem, { TeamMember } from './TeamMemberItem';

import henrik from '../pages/henrik.jpg';
import timo from '../pages/timo.jpeg';
import styled from 'styled-components';
import Subheader from './Subheader';

const teamMembers: TeamMember[] = [
  {
    name: 'Timo Isoviita',
    title: 'CEO & Founder',
    description:
      'Vauhtioon etsin sellaisia ihmisiä, kenen kanssa itse haluaisin työskennellä. Näkemyksessä auttaa yli kymmenen vuoden kokemus kehittäjän tehtävistä. Vauhtiossa vastaan liiketoiminnasta, taloudesta ja asiakkuuksista. ',
    image: timo,
  },
  {
    name: 'Henrik Raitasola',
    title: 'CTO & Founder',
    description:
      'Vauhtiossa autan kehittäjiämme pääsemään maksimaaliseen osaamiseen niin lyhyessä ajassa kuin mahdollista. Viiden vuoden kehittäjän kokemuksellani pystyn auttamaan sinun yritystäsi samaan projektiisi sopivat kehittäjät.',
    image: henrik,
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
      <Subheader>Meidän kanssa onnistut</Subheader>
      <h2 className="section-header">Huipputiimi</h2>

      <div className="container">
        <TeamMembers>{teamMembers.map(TeamMemberItem)}</TeamMembers>
      </div>
    </section>
  );
};

export default TeamSection;
