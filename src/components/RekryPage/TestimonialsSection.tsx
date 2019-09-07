import React from 'react';
import Testimonial, { Testimonial as TestimonialType } from './Testimonial';
import mikko from '../../images/testimonials/mikko.jpeg';
import mahady from '../../images/testimonials/mahady.jpeg';

const testimonials: TestimonialType[] = [
  {
    author: 'Mikko Rajala',
    workTitle: 'Junior Consultant',
    year: 2019,
    testimonial:
      "Vauhtio's onboarding program got me well prepared for my first job in IT and I got to start working at a client even sooner than I was anticipating!",
    avatar: mikko,
  },
  {
    author: 'Mahady Chowdhury',
    workTitle: 'Junior Consultant',
    year: 2019,
    testimonial:
      'Vauhtio onboarding experience was great! It paved the path for me to land a job.',
    avatar: mahady,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Mitä aikaisemmat junnumme sanovat?</h2>
        <div className="testimonials">
          {testimonials.map(testimonial => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
