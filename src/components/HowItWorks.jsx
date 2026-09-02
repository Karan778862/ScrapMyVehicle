import React from 'react';
import { FileEdit, Truck, Coins, Stamp } from 'lucide-react';
import { howItWorksSteps } from '../data/featuresData';

export default function HowItWorks() {
  const getStepIcon = (name) => {
    switch (name) {
      case 'FileEdit':
        return <FileEdit size={32} strokeWidth={1.8} />;
      case 'Truck':
        return <Truck size={32} strokeWidth={1.8} />;
      case 'Coins':
        return <Coins size={32} strokeWidth={1.8} />;
      case 'Stamp':
        return <Stamp size={32} strokeWidth={1.8} />;
      default:
        return <FileEdit size={32} />;
    }
  };

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <span className="section-tag-pill">SIMPLE, FAST & HASSLE-FREE</span>
        <h2 className="section-main-heading">How It Works</h2>

        <div className="steps-timeline-grid">
          {howItWorksSteps.map((step, index) => (
            <div key={step.step} className="step-card">
              <div className="step-icon-container">
                <div className="step-number-badge">{step.step}</div>
                <div className="step-icon-box">
                  {getStepIcon(step.iconName)}
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="step-arrow-divider"></div>
                )}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
