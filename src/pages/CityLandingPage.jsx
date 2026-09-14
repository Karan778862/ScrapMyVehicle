import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustStats from '../components/TrustStats';
import HowItWorks from '../components/HowItWorks';
import WhatWeScrap from '../components/WhatWeScrap';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BottomCTA from '../components/BottomCTA';

export default function CityLandingPage({ onQuoteResult }) {
  const { city } = useParams();
  const navigate = useNavigate();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch city data from our Node.js backend
    const fetchCityData = async () => {
      try {
        const response = await fetch(`https://scrapmyvehicle.onrender.com/api/cities/${city}`);
        
        if (!response.ok) {
          throw new Error('City not found');
        }
        
        const data = await response.json();
        setCityData(data);
        
        // Update document title for SEO
        document.title = `${data.heroTitle} | ScrapMyVehicles`;
      } catch (error) {
        console.error('Error fetching city:', error);
        // If city not found, redirect to home page
        navigate('/', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchCityData();
  }, [city, navigate]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!cityData) return null;

  // Format image URL if it's an uploaded file
  const bgImageUrl = cityData.heroBgImage?.startsWith('/uploads/') 
    ? `https://scrapmyvehicle.onrender.com${cityData.heroBgImage}` 
    : cityData.heroBgImage;

  return (
    <>
      {/* Dynamic Hero Section */}
      <HeroSection 
        onQuoteResult={onQuoteResult} 
        title={cityData.heroTitle}
        bgImage={bgImageUrl}
      />
      
      {/* Trust Stats / Counting Numbers */}
      <TrustStats />

      {/* How It Works - 4 Steps */}
      <HowItWorks />

      {/* What We Scrap (By Type) */}
      <WhatWeScrap />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQSection limit={5} />

      {/* Bottom Call to Action Strip */}
      <BottomCTA />
    </>
  );
}
