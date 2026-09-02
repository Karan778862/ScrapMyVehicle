import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { servedCities } from '../data/featuresData';

export default function InstantCashBanner() {
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');

  const scrollToQuote = () => {
    document.getElementById('quote-form-card')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="instant-cash-section" id="cities">
      <div className="container">
        <h2 className="section-banner-title">TOP CITIES WE SERVE</h2>

        {/* Instant Cash Main Card */}
        <div className="instant-cash-banner">
          <div className="instant-cash-content">
            <h3 className="instant-cash-heading">
              Turn Your Old Vehicle <br />
              Into <span className="cash-green">Instant Cash</span>
            </h3>
            <p className="instant-cash-text">
              Don't let your old vehicle take up space. <br />
              Scrap it today and get the best value!
            </p>
            <div>
              <button 
                className="btn-primary" 
                onClick={scrollToQuote}
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                <span>Get Free Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="instant-cash-image-holder">
            <img 
              src="/Turn-Your-Old-Vehicle/OldVehicle.png" 
              alt="Turn old vehicle into instant cash" 
              className="instant-cash-img"
            />
          </div>
        </div>

        {/* Interactive Cities Pills */}
        <div className="cities-pills-bar">
          {servedCities.map((city) => (
            <button
              key={city.name}
              className={`city-pill ${selectedCity === city.name ? 'active' : ''}`}
              onClick={() => {
                setSelectedCity(city.name);
                scrollToQuote();
              }}
              title={city.state}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} />
                {city.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
