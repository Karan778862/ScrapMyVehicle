import React from 'react';

export default function FeaturedIn() {
  const logos = [
    { name: "Government Authorized RVSF", icon: "🏛️" },
    { name: "100% Eco-Compliant", icon: "🌱" },
    { name: "ISO 9001 Certified", icon: "📜" },
    { name: "Trusted by 50K+ Indians", icon: "🤝" },
  ];

  return (
    <section className="featured-in-section">
      <div className="container">
        <p className="featured-in-text">Recognized & Authorized By</p>
        <div className="featured-in-grid">
          {logos.map((logo, index) => (
            <div key={index} className="featured-logo-card">
              <span className="featured-logo-icon">{logo.icon}</span>
              <span className="featured-logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
