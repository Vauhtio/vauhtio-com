import React from 'react';
import styled from 'styled-components';

export type HowSectionItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

type Props = {
  howItem: HowSectionItem;
};

const HowItem = (props: Props) => {
  return (
    <Container>
      <div className="how-item__icon-wrapper">
        <img
          className="how-item__icon"
          src={props.howItem.icon}
          alt={props.howItem.iconAlt}
        />
      </div>
      <Title>{props.howItem.title}</Title>
      <p className="how-item__description">{props.howItem.description}</p>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`;

export default HowItem;
