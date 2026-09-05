import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Truck, Users, Award } from 'lucide-react';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo for smoother ending
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const StatItem = ({ end, suffix, label, icon: Icon }) => {
  const { count, ref } = useCountUp(end, 2500);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon-wrapper">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      <div className="stat-content">
        <h3 className="stat-number">
          {count.toLocaleString('en-IN')}
          {suffix}
        </h3>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

export default function TrustStats() {
  return (
    <section className="trust-stats-section">
      <div className="container">
        <div className="stats-grid">
          <StatItem end={15} suffix="+" label="Years of Experience" icon={Award} />
          <StatItem end={50000} suffix="+" label="Vehicles Scrapped" icon={Truck} />
          <StatItem end={100} suffix="%" label="Legal & Compliant" icon={ShieldCheck} />
          <StatItem end={45000} suffix="+" label="Happy Customers" icon={Users} />
        </div>
      </div>
    </section>
  );
}
