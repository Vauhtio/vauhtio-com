import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

export type TeamMember = {
  name: string;
  title: string;
  description: string;
  image: FluidObject;
};

type Props = {
  teamMember: TeamMember;
};

const TeamMemberItem = (props: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image fluid={props.teamMember.image} />
      </ImageWrapper>
      <Title>{props.teamMember.title}</Title>
      <Name>{props.teamMember.name}</Name>
      <Separator />
      <Description>{props.teamMember.description}</Description>
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

const Image = styled(Img)`
  position: absolute;
  left: 24px;
  top: 24px;
  width: 100%;
  height: 300px;
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
