import React from 'react';
import { BadgePercent, Truck, Banknote, FileCheck, Recycle } from 'lucide-react';
import { featureStripItems } from '../data/featuresData';

export default function FeatureStrip() {
  const getIcon = (name) => {
    switch (name) {
      case 'BadgePercent':
        return <BadgePercent size={22} />;
      case 'Truck':
        return <Truck size={22} />;
      case 'Banknote':
        return <Banknote size={22} />;
      case 'FileCheck':
        return <FileCheck size={22} />;
      case 'Recycle':
        return <Recycle size={22} />;
      default:
        return <BadgePercent size={22} />;
    }
  };

  return (
    <section className="features-strip">
      <div className="container">
        <div className="features-strip-grid">
          {featureStripItems.map((item) => (
            <div key={item.id} className="feature-strip-card">
              <div className="feature-icon-wrapper">
                {getIcon(item.iconName)}
              </div>
              <div className="feature-text-block">
                <h4 className="feature-card-title">{item.title}</h4>
                <p className="feature-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
