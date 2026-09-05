import React, { useEffect } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Car, Zap, CheckCircle2 } from 'lucide-react';
import FAQSection from '../components/FAQSection';

const locations = [
  {
    city: 'Delhi NCR',
    address: 'ScrapMyVehicle Processing Hub, Okhla Industrial Area, Phase 2, New Delhi - 110020'
  },
  {
    city: 'Noida',
    address: 'Sector 63, Near Electronic City Metro Station, Noida, Uttar Pradesh - 201301'
  },
  {
    city: 'Gurgaon',
    address: 'Udyog Vihar Phase 4, Gurugram, Haryana - 122015'
  },
  {
    city: 'Faridabad',
    address: 'NIT Industrial Area, Faridabad, Haryana - 121001'
  },
  {
    city: 'Ghaziabad',
    address: 'Sahibabad Industrial Area Site 4, Ghaziabad, UP - 201010'
  },
  {
    city: 'Meerut',
    address: 'Partapur Industrial Estate, Meerut, Uttar Pradesh - 250103'
  }
];

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your request has been received. Our team will contact you shortly.');
    e.target.reset();
  };

  return (
    <div className="contact-page-wrapper">
      {/* Contact Header */}
      <div className="contact-page-header">
        <div className="container">
          <span className="contact-badge">We're Here to Help</span>
          <h1>Get in Touch with Us</h1>
          <p>Ready to scrap your vehicle? Request a callback and our expert team will assist you immediately.</p>
        </div>
      </div>

      <div className="container">
        {/* Split Contact Block */}
        <div className="contact-split-box">
          {/* Left Side: Info */}
          <div className="contact-info-panel">
            <h2>Get In Touch</h2>
            <p className="contact-panel-desc">We offer India's most trusted, hassle-free scrapping experience.</p>
            
            <div className="contact-feature-list">
              <div className="contact-feature">
                <div className="cf-icon"><Zap size={20} /></div>
                <div>
                  <h4>Quick Response</h4>
                  <p>We respond within 15 minutes</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="cf-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Pan-India Service</h4>
                  <p>Serving across major cities</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="cf-icon"><Car size={20} /></div>
                <div>
                  <h4>All Vehicle Types</h4>
                  <p>Cars, Bikes, Commercial Vehicles</p>
                </div>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="contact-direct-details">
              <a href="tel:18007277669227" className="cd-link">
                <PhoneCall size={18} /> 1800-72776-69227
              </a>
              <a href="mailto:info@scrapmyvehicle.in" className="cd-link">
                <Mail size={18} /> info@scrapmyvehicle.in
              </a>
              <div className="cd-link">
                <Clock size={18} /> Mon - Sat, 9AM - 7PM
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            <h2>Request a Callback</h2>
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name*</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Your Email*</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Phone No.*</label>
                <input type="tel" placeholder="+91 9876543210" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your vehicle..."></textarea>
              </div>
              <button type="submit" className="btn-contact-submit">Request a Callback</button>
            </form>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="locations-section">
          <div className="locations-header">
            <h2>Our Service Network</h2>
            <p>Authorized scrapping facilities across multiple locations for your convenience.</p>
          </div>
          <div className="locations-grid">
            {locations.map((loc, index) => (
              <div className="location-card" key={index}>
                <div className="loc-card-header">
                  <MapPin size={20} className="loc-icon" />
                  <h3>{loc.city} Hub</h3>
                </div>
                <p>{loc.address}</p>
                <div className="loc-status">
                  <CheckCircle2 size={16} /> Operational
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Reusing existing FAQ component at the bottom */}
      <FAQSection />
    </div>
  );
}
