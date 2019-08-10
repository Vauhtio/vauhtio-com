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
      <h3 className="how-item__title">{howItem.title}</h3>
      <p className="how-item__description">{howItem.description}</p>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 32px;
`;

export default HowItem;
