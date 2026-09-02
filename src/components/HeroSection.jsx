import React from 'react';
import { Check } from 'lucide-react';
import InstantQuoteForm from './InstantQuoteForm';

export default function HeroSection({ onQuoteResult }) {
  const bulletPoints = [
    'Instant Quote',
    'Free Pickup Anywhere',
    'Instant Payment',
    'RTO Clearance',
    'Best Price Guaranteed'
  ];

  return (
    <section className="hero-section">
      {/* Background Graphic Circle */}
      <div className="hero-background-art"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headings & Value Props */}
          <div className="hero-left-content">
            <h1 className="hero-title">
              SCRAP YOUR VEHICLE
              <span className="title-accent">THE RIGHT WAY</span>
            </h1>
            <p className="hero-subtitle">
              Get the Best Price for Your Old or Scrap Vehicle <br />
              <strong>Hassle-free | Quick | 100% Legal</strong>
            </p>

            <ul className="hero-bullet-list">
              {bulletPoints.map((point, index) => (
                <li key={index} className="hero-bullet-item">
                  <div className="check-icon">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Social Proof Avatars */}
            <div className="happy-customers-badge">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" alt="Customer" />
              </div>
              <div className="customers-text">
                <span className="customers-count">50,000+</span>
                <span className="customers-sub">Happy Customers</span>
              </div>
            </div>
          </div>



          {/* Right Column: Instant Quote Form Card */}
          <div className="hero-right-form">
            <InstantQuoteForm onQuoteResult={onQuoteResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
