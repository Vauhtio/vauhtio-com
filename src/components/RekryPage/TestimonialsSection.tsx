import React from 'react';
import Testimonial, { Testimonial as TestimonialType } from './Testimonial';
import mikko from '../../images/testimonials/mikko.jpeg';
import mahady from '../../images/testimonials/mahady.jpeg';
import roni from '../../images/testimonials/roni.jpg';

/**
 * Roni Metsämuuronen full testimonial
 *
 * The onboarding with Vauhtio was everything I could have ever hoped for! During the 10 weeks of training I could feel myself improving each day, while simultaniously getting better picture of the field and what it would be like working with real professionals.
 *
 * With their help, I was able to land a job, a junior position in the kind of company I had desired one day to be working for, a spot I could have never reached this short in to my career on my own!
 *
 * This was the best thing I could have ever hoped for my professional career, and because of that I'll be in eternal debt for the guys at Vauhtio giving me a kickstart!
 */

const testimonials: TestimonialType[] = [
  {
    author: 'Roni Metsämuuronen',
    workTitle: 'Junior Consultant',
    year: 2020,
    testimonial:
      'With their help, I was able to land a job, a junior position in the kind of company I had desired one day to be working for, a spot I could have never reached this short in to my career on my own!',
    avatar: roni,
  },
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
          {testimonials.map((testimonial, index) => (
            <Testimonial testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
