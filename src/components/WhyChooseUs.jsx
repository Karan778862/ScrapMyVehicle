import React from 'react';
import { ShieldCheck, Truck, Wallet, Tag, Users } from 'lucide-react';
import { whyChooseBadges } from '../data/featuresData';

export default function WhyChooseUs() {
  const getBadgeIcon = (name) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck size={26} />;
      case 'Truck':
        return <Truck size={26} />;
      case 'Wallet':
        return <Wallet size={26} />;
      case 'Tag':
        return <Tag size={26} />;
      case 'Users':
        return <Users size={26} />;
      default:
        return <ShieldCheck size={26} />;
    }
  };

  return (
    <section className="why-choose-section" id="why-choose">
      <div className="container">
        <div className="why-choose-header">
          <h2 className="why-choose-heading">
            WHY CHOOSE <span className="green-highlight">SCRAP MY VEHICLE?</span>
          </h2>
          <p className="why-choose-subtext">
            We make vehicle scrapping easy, safe and rewarding.
          </p>
        </div>

        <div className="why-choose-grid">
          {/* Left: 5 Badges */}
          <div className="why-choose-badges-list">
            {whyChooseBadges.map((badge) => (
              <div key={badge.id} className="why-badge-item">
                <div className="why-badge-icon">
                  {getBadgeIcon(badge.iconName)}
                </div>
                <h4 className="why-badge-title">{badge.title}</h4>
                <p className="why-badge-desc">{badge.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Right: Dark Theme Vehicles */}
          <div className="why-choose-image-box">
            <img 
              src="/images/why_choose_vehicles.jpg" 
              alt="Scrap vehicles towing and valuation" 
              className="why-choose-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
