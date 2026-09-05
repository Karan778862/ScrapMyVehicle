import React from 'react';
import { vehicleTypeCategories } from '../data/featuresData';
import { ArrowUpRight } from 'lucide-react';

export default function VehicleTypesSection({ onSelectCondition }) {
  const scrollToForm = (conditionId) => {
    if (onSelectCondition) {
      onSelectCondition(conditionId);
    }
    const quoteElement = document.getElementById('quote-form-card');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="vehicle-types-section" id="vehicle-types">
      <div className="container">
        <h2 className="vehicle-types-heading">
          <span className="green-text">WE SCRAP</span> ALL TYPES OF VEHICLES
        </h2>
        <p className="vehicle-types-subheading">Any Condition, Any Brand, Any Model</p>

        <div className="vehicle-types-grid">
          {vehicleTypeCategories.map((item) => (
            <div 
              key={item.id} 
              className="vehicle-type-card"
              onClick={() => scrollToForm(item.id)}
            >
              <div className="vehicle-type-header">
                <h3 className="vehicle-type-title">{item.title}</h3>
                <p className="vehicle-type-condition">{item.subtitle}</p>
              </div>

              <div className="vehicle-type-image-holder">
                <img src={item.image} alt={item.title} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span className="vehicle-type-pill">{item.tag}</span>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: 'var(--slate-100)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary-600)'
                }}>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
