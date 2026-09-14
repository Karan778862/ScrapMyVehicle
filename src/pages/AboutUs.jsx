import React, { useEffect } from 'react';
import { Target, Leaf, Zap, ShieldCheck, Car, ArrowRight, CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      
      {/* 1. Premium Hero Section */}
      <section className="about-hero-premium">
        <div className="about-hero-content">
          <div className="about-hero-badge">Pioneering the Future</div>
          <h1 className="about-hero-title">Redefining Vehicle <span>Scrapping</span> in India</h1>
          <p className="about-hero-desc">
            India’s premier Government-Authorized Vehicle Recycler, committed to zero pollution, sustainable scrapping, and driving the circular economy forward.
          </p>
        </div>
      </section>

      {/* 2. Floating Stats Grid */}
      <div className="container">
        <div className="premium-stats-grid">
          <div className="premium-stat-card">
            <div className="premium-stat-icon"><Car size={32} /></div>
            <div className="premium-stat-value">50K+</div>
            <div className="premium-stat-label">Vehicles Scrapped</div>
          </div>
          <div className="premium-stat-card">
            <div className="premium-stat-icon"><Zap size={32} /></div>
            <div className="premium-stat-value">30K+</div>
            <div className="premium-stat-label">Tonnes Ferrous</div>
          </div>
          <div className="premium-stat-card">
            <div className="premium-stat-icon"><Leaf size={32} /></div>
            <div className="premium-stat-value">45K+</div>
            <div className="premium-stat-label">Tonnes CO2 Saved</div>
          </div>
          <div className="premium-stat-card">
            <div className="premium-stat-icon"><ShieldCheck size={32} /></div>
            <div className="premium-stat-value">100%</div>
            <div className="premium-stat-label">Legal Compliance</div>
          </div>
        </div>
      </div>

      {/* 3. Premium Mission & Vision Section */}
      <section className="premium-mission-section">
        <div className="container">
          <div className="mission-flex-container">
            <div className="mission-content-box">
              <span className="section-subtitle">Our Purpose</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>A Strategic Sustainability Mission</h2>
              <p className="mission-text">
                <strong>ScrapMyVehicles</strong> was established to achieve the critical goals of Zero Pollution, Zero Wastage, and bringing down the import of Metal Scraps to Zero. With our highly organized and RTO-approved vehicle recycling units across the country, we have created a seamless recycling system.
              </p>
              <p className="mission-text">
                Our forte is the responsible recycling of special steels, ferrous, and non-ferrous metals used in automobiles. Recycling old vehicles helps reduce air pollution, creates safer roads, and significantly reduces India's dependence on the import of steel scrap.
              </p>
              <div className="mission-checklist">
                <div className="checklist-item">
                  <div className="check-icon-wrap"><CheckCircle2 size={24} /></div>
                  <div className="check-text">
                    <h4>Government Authorized</h4>
                    <p>RTO Approved & Certified Recycling</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <div className="check-icon-wrap"><ShieldCheck size={24} /></div>
                  <div className="check-text">
                    <h4>Zero Toxic Leakage</h4>
                    <p>100% Eco-Friendly Dismantling</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <div className="check-icon-wrap"><Zap size={24} /></div>
                  <div className="check-text">
                    <h4>Maximum Recovery</h4>
                    <p>High Quality Ferrous & Non-Ferrous Scrap</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mission-image-box">
              <div className="premium-mission-image">
                <img src="/images/why_choose_vehicles.jpg" alt="Recycling Facility" />
                <div className="premium-mission-badge">
                  <div className="badge-icon"><Leaf size={32} /></div>
                  <div className="badge-text">
                    <h5>Eco-Friendly</h5>
                    <span>Global Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Journey / Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="text-center mb-5 pb-3">
            <span className="section-subtitle">Our History</span>
            <h2 className="section-title">The Journey of ScrapMyVehicles</h2>
            <p className="section-desc">From a small scrap yard to India's leading organized vehicle recycler.</p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2016</h3>
                <h4>The Beginning</h4>
                <p>Started operations with a vision to organize the unorganized vehicle scrapping sector in India.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <h4>Government Authorization</h4>
                <p>Received official RTO approval and certification, becoming one of the first legal RVSFs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022</h3>
                <h4>Expansion & Tech Integration</h4>
                <p>Expanded to 50+ cities and introduced digital instant quotes for seamless customer experience.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025</h3>
                <h4>Sustainability Milestone</h4>
                <p>Successfully scrapped over 50,000 vehicles, saving 45,000+ tonnes of CO2 emissions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Premium Core Values Section (Expanded to 6 cards) */}
      <section className="premium-values-section bg-light">
        <div className="container">
          <div className="text-center mb-5 pb-3">
            <span className="section-subtitle">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-desc">
              We operate on a strong foundation of ethics, sustainability, and unparalleled customer service.
            </p>
          </div>
          
          <div className="values-grid">
            <div className="premium-value-card">
              <div className="premium-value-icon"><Target size={28} /></div>
              <h3>Transparency</h3>
              <p>Complete transparency throughout the scrapping process, from initial quotation to final RTO deregistration.</p>
            </div>
            <div className="premium-value-card">
              <div className="premium-value-icon"><Leaf size={28} /></div>
              <h3>Eco-Friendly</h3>
              <p>Facilities adhere to the highest global environmental standards, ensuring zero toxic leakage.</p>
            </div>
            <div className="premium-value-card">
              <div className="premium-value-icon"><ShieldCheck size={28} /></div>
              <h3>Customer First</h3>
              <p>We handle all paperwork, offer free towing, and provide instant payments for a hassle-free experience.</p>
            </div>
            <div className="premium-value-card">
              <div className="premium-value-icon"><TrendingUp size={28} /></div>
              <h3>Innovation</h3>
              <p>Continuously upgrading our machinery and digital platforms to provide the fastest service in the industry.</p>
            </div>
            <div className="premium-value-card">
              <div className="premium-value-icon"><Award size={28} /></div>
              <h3>Reliability</h3>
              <p>A trusted partner for thousands of vehicle owners, corporates, and insurance companies across India.</p>
            </div>
            <div className="premium-value-card">
              <div className="premium-value-icon"><Users size={28} /></div>
              <h3>Nation Building</h3>
              <p>Contributing to the circular economy and reducing India's reliance on imported steel scrap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-bg-overlay"></div>
            <div className="cta-banner-content">
              <h2>Ready to scrap your vehicle the right way?</h2>
              <p>Join thousands of responsible citizens who chose ScrapMyVehicles for a greener tomorrow.</p>
              <div className="cta-buttons">
                <button className="btn-primary cta-btn-main" onClick={() => navigate('/#quote-form-card')}>
                  <span>Get Instant Quote</span>
                  <ArrowRight size={18} />
                </button>
                <button className="btn-outline-white cta-btn-secondary" onClick={() => navigate('/contact')}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <FAQSection limit={5} />
    </div>
  );
}
