import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustStats from '../components/TrustStats';
import HowItWorks from '../components/HowItWorks';
import WhatWeScrap from '../components/WhatWeScrap';
import UrgencyOffer from '../components/UrgencyOffer';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BottomCTA from '../components/BottomCTA';

export default function LandingPage({ onQuoteResult }) {
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
      {/* Hero Section & Instant Quote Card */}
      <HeroSection onQuoteResult={onQuoteResult} />

      {/* Trust Stats / Counting Numbers */}
      <TrustStats />

      {/* How It Works - 4 Steps */}
      <HowItWorks />

      {/* What We Scrap (By Type) */}
      <WhatWeScrap />

      {/* Special Urgency Offer */}
      <UrgencyOffer />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions with Crane Illustration */}
      <FAQSection limit={5} />

      {/* Bottom Call to Action Strip */}
      <BottomCTA />
    </>
  );
}
