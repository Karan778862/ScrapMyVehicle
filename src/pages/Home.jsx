import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustStats from '../components/TrustStats';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatWeScrap from '../components/WhatWeScrap';
import VehicleTypesSection from '../components/VehicleTypesSection';
import InstantCashBanner from '../components/InstantCashBanner';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BottomCTA from '../components/BottomCTA';

export default function Home({ onQuoteResult }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* 3. Hero Section & Instant Quote Card */}
      <HeroSection onQuoteResult={onQuoteResult} />
      
      {/* Trust Stats / Counting Numbers */}
      <TrustStats />

      {/* 5. How It Works - 4 Steps */}
      <HowItWorks />

      {/* 6. Why Choose Scrap My Vehicle? - Dark Section */}
      <WhyChooseUs />

      {/* NEW: What We Scrap (By Type) */}
      <WhatWeScrap />

      {/* 7. We Buy All Types Of Vehicles */}
      <VehicleTypesSection onSelectCondition={(cond) => {
        // Form focus logic handles it directly via ids normally
      }} />

      {/* 8. Top Cities We Serve & Instant Cash Banner */}
      <InstantCashBanner />

      {/* 9. Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions with Crane Illustration */}
      <FAQSection />

      {/* 11. Bottom Call to Action Strip */}
      <BottomCTA />
    </>
  );
}
