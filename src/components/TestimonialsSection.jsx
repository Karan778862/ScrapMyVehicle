import React, { useState, useRef } from 'react';
import { testimonialsList } from '../data/testimonialsData';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);
  
  const testimonials = testimonialsList.slice(0, 3); // Use first 3 testimonials

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    // Calculate which card is closest to the center
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / testimonials.length;
    const newIndex = Math.round(scrollLeft / itemWidth);
    
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setActiveDot(newIndex);
    }
  };

  const scrollToIdx = (idx) => {
    setActiveDot(idx);
    if (scrollRef.current && scrollRef.current.children[idx]) {
      scrollRef.current.children[idx].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="testimonials-heading">WHAT OUR CUSTOMERS SAY</h2>
        <p className="testimonials-subheading">Real stories from real customers</p>

        <div className="testimonials-grid" ref={scrollRef} onScroll={handleScroll}>
          {testimonials.map((item) => (
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
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot-item ${activeDot === idx ? 'active' : ''}`}
              onClick={() => scrollToIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
