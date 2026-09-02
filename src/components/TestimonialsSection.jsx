import React, { useState } from 'react';
import { testimonialsList } from '../data/testimonialsData';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="testimonials-heading">WHAT OUR CUSTOMERS SAY</h2>
        <p className="testimonials-subheading">Real stories from real customers</p>

        <div className="testimonials-grid">
          {testimonialsList.slice(0, 3).map((item) => (
            <div key={item.id} className="testimonial-card">
              <div>
                <div className="quote-icon-mark">“</div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-text">{item.review}</p>
              </div>

              <div className="testimonial-user">
                <img src={item.avatar} alt={item.name} className="user-avatar" />
                <div className="user-details">
                  <span className="user-name">{item.name}</span>
                  <span className="user-city">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="carousel-dots">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              className={`dot-item ${activeDot === idx ? 'active' : ''}`}
              onClick={() => setActiveDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
