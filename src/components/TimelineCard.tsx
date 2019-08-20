import React from 'react';

type Props = {
  header: string;
  paragraphs: string[];
};

const TimelineCard = (props: Props) => {
  return (
    <div className="card">
      <h3>{props.header}</h3>
      {props.paragraphs.map(paragraph => {
        return <p>{paragraph}</p>;
      })}
      <div className="card__line">
        <div className="card__line__point"></div>
      </div>
    </div>
  );
};

export default TimelineCard;
