import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UrgencyOffer() {
  const navigate = useNavigate();

  return (
    <section className="urgency-offer-section">
      <div className="container">
        <div className="urgency-card">
          <div className="urgency-bg-pattern"></div>
          <div className="urgency-content">
            <div className="urgency-badge">
              <Tag size={16} />
              <span>Limited Time Offer</span>
            </div>
            <h2>Get up to ₹5,000 Extra Valuation</h2>
            <p>
              Scrap your vehicle with us this week and receive an exclusive bonus on top of your vehicle's scrap value. Available for all cars and commercial vehicles.
            </p>
            <button 
              className="btn-primary urgency-btn" 
              onClick={() => {
                document.getElementById('quote-form-card')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Claim Offer Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
