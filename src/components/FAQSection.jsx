import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqList } from '../data/faqData';

export default function FAQSection({ limit, hideImage, hideHeading }) {
  const [openId, setOpenId] = useState(1); // First item open by default like the image

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const displayedFaqs = limit ? faqList.slice(0, limit) : faqList;

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {!hideHeading && <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>}

        <div className={hideImage ? "faq-list-container" : "faq-grid"} style={hideImage ? { maxWidth: '800px', margin: '0 auto' } : {}}>
          {/* Left Column: Accordion Questions */}
          <div className="faq-accordion-list" style={{ width: '100%' }}>
            {displayedFaqs.map((item) => {
              const isExpanded = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`faq-item ${isExpanded ? 'expanded' : ''}`}
                >
                  <button 
                    className="faq-item-button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>

                  {isExpanded && (
                    <div className="faq-content-body">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {limit && faqList.length > limit && (
              <div style={{ marginTop: '24px', textAlign: 'left' }}>
                <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#059647', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px', padding: '10px 0', borderBottom: '2px solid transparent', transition: 'border-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#059647'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>
                  Read All FAQs <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Crane lifting scrap vehicle */}
          {!hideImage && (
            <div className="faq-crane-holder">
              <img 
                src="/faq/1.png" 
                alt="Hydraulic crane recycling scrap vehicle" 
                className="faq-crane-img"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
