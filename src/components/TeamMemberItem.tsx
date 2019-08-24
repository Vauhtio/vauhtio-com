import React from 'react';
import styled from 'styled-components';

export type TeamMember = {
  name: string;
  title: string;
  description: string;
  image: string;
};

type Props = {
  teamMember: TeamMember;
};

const TeamMemberItem = (teamMember: TeamMember) => {
  return (
    <Container>
      <ImageWrapper>
        <Image teamMember={teamMember} />
      </ImageWrapper>
      <Title>{teamMember.title}</Title>
      <Name>{teamMember.name}</Name>
      <Separator />
      <Description>{teamMember.description}</Description>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #edecfe 0%, #d2cffc 100%);
  border-radius: 4px;
  position: relative;
  height: 300px;
  left: -24px;
`;

const Image = styled.div<Props>`
  position: absolute;
  left: 24px;
  top: 24px;
  width: 100%;
  height: 300px;
  background: url(${props => props.teamMember.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  filter: grayscale(100%);
`;

const Title = styled.p`
  margin-top: 48px;
  margin-bottom: 8px;
`;

const Name = styled.h3``;

const Separator = styled.hr`
  width: 48px;
  height: 2px;
  background: #6c63ff;
  margin: 0 auto;
  margin-bottom: 16px;
`;

const Description = styled.p``;

export default TeamMemberItem;
