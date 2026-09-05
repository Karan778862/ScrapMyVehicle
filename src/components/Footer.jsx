import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, PhoneCall, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-about">
            <a href="#home" className="footer-logo">
              <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" fill="#059647" fillOpacity="0.2" stroke="#059647" strokeWidth="3"/>
                <path d="M50 18 C32 18 18 32 18 50 C18 58 21 65 26 71" stroke="#059647" strokeWidth="6" strokeLinecap="round"/>
                <polygon points="16,42 26,42 21,32" fill="#059647"/>
                <path d="M50 82 C68 82 82 68 82 50 C82 42 79 35 74 29" stroke="#0ca750" strokeWidth="6" strokeLinecap="round"/>
                <polygon points="84,58 74,58 79,68" fill="#0ca750"/>
                <path d="M34 56 L38 46 Q40 43 45 43 L55 43 Q60 43 62 46 L66 56 Z" fill="#059647"/>
                <rect x="30" y="54" width="40" height="10" rx="3" fill="#047857"/>
                <circle cx="39" cy="64" r="4.5" fill="#ffffff"/>
                <circle cx="61" cy="64" r="4.5" fill="#ffffff"/>
              </svg>
              <span>ScrapMyVehicle<span className="dot-in">.in</span></span>
            </a>
            <p className="footer-about-text">
              India's most trusted vehicle scrapping platform. We offer the best price, free pickup, instant payment and complete RTO assistance.
            </p>
            <div className="footer-social-icons">
              <a href="#facebook" className="social-link-btn" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href="#instagram" className="social-link-btn" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="#youtube" className="social-link-btn" aria-label="YouTube">
                <Youtube size={17} />
              </a>
              <a href="#linkedin" className="social-link-btn" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li><a href="#home">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#why-choose">Why Scrap My Vehicle</a></li>
              <li><Link to="/process-guide">Our Process</Link></li>
              <li><a href="#faq">Blog</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#quote-form-card" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Car Scrapping</a></li>
              <li><a href="#quote-form-card" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Bike Scrapping</a></li>
              <li><a href="#quote-form-card" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Truck Scrapping</a></li>
              <li><a href="#quote-form-card" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>3 Wheeler Scrapping</a></li>
              <li><a href="#why-choose">RTO Clearance</a></li>
            </ul>
          </div>

          {/* Col 4: Help */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">HELP</h4>
            <ul className="footer-links-list">
              <li><a href="#faq">FAQs</a></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">CONTACT US</h4>
            <div className="footer-contact-items">
              <a href="tel:18007277669227" className="footer-contact-row">
                <PhoneCall size={16} />
                <span>1800-72776-69227</span>
              </a>
              <a href="mailto:info@scrapmyvehicle.in" className="footer-contact-row">
                <Mail size={16} />
                <span>info@scrapmyvehicle.in</span>
              </a>
              <div className="footer-contact-row">
                <Clock size={16} />
                <span>Mon - Sat, 9AM - 7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-bar">
          <p>© 2026 ScrapMyVehicle.in | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
