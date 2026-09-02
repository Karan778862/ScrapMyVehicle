import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA() {
  const scrollToQuote = () => {
    document.getElementById('quote-form-card')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bottom-cta-strip">
      <div className="container">
        <div className="bottom-cta-inner">
          <div className="cta-text-side">
            <h3 className="cta-main-title">Ready to Scrap Your Vehicle?</h3>
            <p className="cta-sub-title">Get the best price for your old or scrap vehicle today.</p>
          </div>

          <button 
            className="btn-primary" 
            onClick={scrollToQuote}
            style={{ padding: '13px 26px', fontSize: '15px' }}
          >
            <span>Get Free Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
