import React from 'react';
import styled from 'styled-components';

export type HowSectionItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

const HowItem = (howItem: HowSectionItem) => {
  return (
    <Container>
      <div className="how-item__icon-wrapper">
        <img
          className="how-item__icon"
          src={howItem.icon}
          alt={howItem.iconAlt}
        />
      </div>
      <Title>{howItem.title}</Title>
      <p className="how-item__description">{howItem.description}</p>
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
