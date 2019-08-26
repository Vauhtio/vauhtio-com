import React from 'react';

export type Testimonial = {
  author: string;
  workTitle: string;
  year: number;
  testimonial: string;
  avatar: string;
};

type Props = {
  testimonial: Testimonial;
};

const Testimonial = (props: Props) => {
  return (
    <div className="testimonial">
      <img src={props.testimonial.avatar} alt="Author" />
      <div className="author">{props.testimonial.author}</div>
      <div className="subtitle">
        {props.testimonial.workTitle} {props.testimonial.year}
      </div>
      <p>"{props.testimonial.testimonial}"</p>
    </div>
  );
};

export default Testimonial;
