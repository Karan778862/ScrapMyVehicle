import React, { useEffect } from 'react';
import FAQSection from '../components/FAQSection';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-page-wrapper" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '36px', color: '#1f2937', marginBottom: '16px' }}>Frequently Asked Questions</h1>
        <p style={{ color: '#4b5563', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Find answers to common questions about our vehicle scrapping process, documentation, and pricing.
        </p>
      </div>
      
      <FAQSection hideImage={true} hideHeading={true} />
    </div>
  );
}
