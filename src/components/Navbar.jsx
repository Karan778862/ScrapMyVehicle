import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Menu, 
  X, 
  ArrowRight, 
  Home, 
  Info, 
  HelpCircle, 
  Award, 
  Car, 
  BookOpen, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home', active: true, icon: Home },
    { label: 'About Us', href: '#why-choose', icon: Info },
    { label: 'How It Works', href: '#how-it-works', icon: HelpCircle },
    { label: 'Why Scrap My Vehicle', href: '#why-choose', icon: Award },
    { label: 'Our Process', href: '#vehicle-types', icon: Car },
    { label: 'Blog', href: '#faq', icon: BookOpen },
    { label: 'Contact Us', href: '#contact', icon: MessageSquare },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById('quote-form-card');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <>
      <header className={`main-navbar ${scrolled ? 'is-scrolled' : ''}`} id="home">
        <div className="container">
          <div className="navbar-inner">
            {/* Left: Brand Logo */}
            <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <div className="brand-logo-icon-wrapper">
                <svg className="brand-logo-icon" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="46" fill="#059647" fillOpacity="0.12" stroke="#059647" strokeWidth="3"/>
                  <path d="M50 18 C32 18 18 32 18 50 C18 58 21 65 26 71" stroke="#059647" strokeWidth="6" strokeLinecap="round"/>
                  <polygon points="16,42 26,42 21,32" fill="#059647"/>
                  <path d="M50 82 C68 82 82 68 82 50 C82 42 79 35 74 29" stroke="#0ca750" strokeWidth="6" strokeLinecap="round"/>
                  <polygon points="84,58 74,58 79,68" fill="#0ca750"/>
                  <path d="M34 56 L38 46 Q40 43 45 43 L55 43 Q60 43 62 46 L66 56 Z" fill="#059647"/>
                  <rect x="30" y="54" width="40" height="10" rx="3" fill="#047857"/>
                  <circle cx="39" cy="64" r="4.5" fill="#1e293b"/>
                  <circle cx="61" cy="64" r="4.5" fill="#1e293b"/>
                </svg>
              </div>
              <span className="brand-logo-text">
                ScrapMyVehicle<span className="dot-in">.in</span>
              </span>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="desktop-nav">
              <ul className="nav-links">
                {navItems.map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <a 
                      href={item.href} 
                      className={item.active ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                      {item.active && <span className="active-indicator"></span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Phone & CTA Actions */}
            <div className="navbar-actions">
              <a href="tel:18007277669227" className="phone-badge" title="Toll Free Call Support">
                <div className="phone-icon-box">
                  <PhoneCall size={17} />
                </div>
                <div className="phone-info-text">
                  <span className="phone-number">1800-72776-69227</span>
                  <span className="phone-hours">Mon - Sat, 9AM - 7PM</span>
                </div>
              </a>

              <button 
                className="btn-primary btn-header-quote"
                onClick={handleQuoteClick}
              >
                <span>Get Free Quote</span>
                <ArrowRight size={15} />
              </button>

              {/* Mobile Quick Call Icon */}
              <a 
                href="tel:18007277669227" 
                className="mobile-quick-call-btn"
                aria-label="Call Support"
              >
                <PhoneCall size={18} />
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Navigation Drawer */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`mobile-drawer-panel ${mobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-brand">
              <div className="brand-logo-icon-wrapper">
                <svg className="brand-logo-icon" viewBox="0 0 100 100" fill="none" style={{ width: '32px', height: '32px' }}>
                  <circle cx="50" cy="50" r="46" fill="#059647" fillOpacity="0.12" stroke="#059647" strokeWidth="3"/>
                  <path d="M50 18 C32 18 18 32 18 50 C18 58 21 65 26 71" stroke="#059647" strokeWidth="6" strokeLinecap="round"/>
                  <polygon points="16,42 26,42 21,32" fill="#059647"/>
                  <path d="M50 82 C68 82 82 68 82 50 C82 42 79 35 74 29" stroke="#0ca750" strokeWidth="6" strokeLinecap="round"/>
                  <polygon points="84,58 74,58 79,68" fill="#0ca750"/>
                  <path d="M34 56 L38 46 Q40 43 45 43 L55 43 Q60 43 62 46 L66 56 Z" fill="#059647"/>
                  <rect x="30" y="54" width="40" height="10" rx="3" fill="#047857"/>
                  <circle cx="39" cy="64" r="4.5" fill="#1e293b"/>
                  <circle cx="61" cy="64" r="4.5" fill="#1e293b"/>
                </svg>
              </div>
              <span style={{ fontSize: '19px', fontWeight: 800, color: 'var(--slate-900)' }}>
                ScrapMyVehicle<span style={{ color: 'var(--primary-600)' }}>.in</span>
              </span>
            </div>

            <button 
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Call Card */}
          <div className="drawer-call-card">
            <div className="drawer-call-icon">
              <PhoneCall size={20} />
            </div>
            <div className="drawer-call-info">
              <span className="drawer-call-title">Toll-Free Assistance</span>
              <a href="tel:18007277669227" className="drawer-call-number">1800-72776-69227</a>
              <span className="drawer-call-time">Mon - Sat, 9:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Drawer Nav Links */}
          <nav className="drawer-nav-list">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`drawer-nav-item ${item.active ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <div className="drawer-item-icon">
                    <Icon size={18} />
                  </div>
                  <span>{item.label}</span>
                  <ArrowRight size={15} className="drawer-arrow" />
                </a>
              );
            })}
          </nav>

          {/* Drawer Bottom CTA */}
          <div className="drawer-footer-actions">
            <button 
              className="btn-primary"
              style={{ width: '100%', padding: '13px', fontSize: '15px' }}
              onClick={handleQuoteClick}
            >
              <span>Get Free Instant Quote</span>
              <ArrowRight size={16} />
            </button>

            <div className="drawer-trust-note">
              <ShieldCheck size={14} color="var(--primary-600)" />
              <span>100% Legal & Govt. Authorized RVSF</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
