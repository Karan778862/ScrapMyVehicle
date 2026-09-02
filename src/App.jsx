import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureStrip from './components/FeatureStrip';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import VehicleTypesSection from './components/VehicleTypesSection';
import InstantCashBanner from './components/InstantCashBanner';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import QuoteResultModal from './components/QuoteResultModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [quoteResultData, setQuoteResultData] = useState(null);

  const handleQuoteResult = (data) => {
    setQuoteResultData(data);
  };

  const handleCloseModal = () => {
    setQuoteResultData(null);
  };

  return (
    <div className="app-container">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Header / Navigation */}
      <Navbar onOpenQuoteModal={() => {
        document.getElementById('quote-form-card')?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 3. Hero Section & Instant Quote Card */}
      <HeroSection onQuoteResult={handleQuoteResult} />

      {/* 4. Key Features 5-Item Strip */}
      <FeatureStrip />

      {/* 5. How It Works - 4 Steps */}
      <HowItWorks />

      {/* 6. Why Choose Scrap My Vehicle? - Dark Section */}
      <WhyChooseUs />

      {/* 7. We Buy All Types Of Vehicles */}
      <VehicleTypesSection onSelectCondition={(cond) => {
        // Will focus on the form
      }} />

      {/* 8. Top Cities We Serve & Instant Cash Banner */}
      <InstantCashBanner />

      {/* 9. Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions with Crane Illustration */}
      <FAQSection />

      {/* 11. Bottom Call to Action Strip */}
      <BottomCTA />

      {/* 12. Main Footer */}
      <Footer />

      {/* Interactive Modal */}
      {quoteResultData && (
        <QuoteResultModal 
          data={quoteResultData} 
          onClose={handleCloseModal} 
        />
      )}

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
