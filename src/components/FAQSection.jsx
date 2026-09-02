import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../data/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState(1); // First item open by default like the image

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>

        <div className="faq-grid">
          {/* Left Column: Accordion Questions */}
          <div className="faq-accordion-list">
            {faqList.map((item) => {
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
          </div>

          {/* Right Column: Crane lifting scrap vehicle */}
          <div className="faq-crane-holder">
            <img 
              src="/faq/1.png" 
              alt="Hydraulic crane recycling scrap vehicle" 
              className="faq-crane-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
