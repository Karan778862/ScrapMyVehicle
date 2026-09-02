import React from 'react';
import { ShieldCheck, Banknote, Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <span>🇮🇳 India's Most Trusted Vehicle Scrapping Service</span>
          </div>
          <div className="top-bar-right">
            <div className="top-feature-item">
              <ShieldCheck size={16} strokeWidth={2.5} />
              <span>100% Safe & Legal Process</span>
            </div>
            <div className="top-feature-item">
              <Banknote size={16} strokeWidth={2.5} />
              <span>Instant Payment</span>
            </div>
            <div className="top-feature-item">
              <Truck size={16} strokeWidth={2.5} />
              <span>Free Pickup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
