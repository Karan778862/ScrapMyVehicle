import React from 'react';
import { Car, Bike, Tractor, Bus, Truck, BatteryCharging } from 'lucide-react';

const vehicleCategories = [
  { id: 'car', label: 'Cars', icon: Car },
  { id: 'bike', label: 'Two-Wheeler', icon: Bike },
  { id: 'three-wheeler', label: 'Three-Wheeler', icon: Tractor },
  { id: 'bus', label: 'Bus', icon: Bus },
  { id: 'truck', label: 'Truck', icon: Truck },
  { id: 'ev', label: 'Electric Vehicles', icon: BatteryCharging },
];

export default function WhatWeScrap() {
  const scrollToForm = () => {
    const formElement = document.getElementById('quote-form-card');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="what-we-scrap-section">
      <div className="container">
        <div className="what-we-scrap-layout">
          {/* Left Side: Text */}
          <div className="what-we-scrap-text">
            <h2>
              What We<br />
              <span className="green-text">Scrap</span>
            </h2>
            <p>
              Select your vehicle type to get started with an instant estimate.
            </p>
          </div>

          {/* Right Side: Cards Grid */}
          <div className="what-we-scrap-grid">
            {vehicleCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="scrap-category-card" onClick={scrollToForm}>
                  <div className="scrap-icon-wrapper">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3>{category.label}</h3>
                  <button className="get-estimate-btn">Get Estimate</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
