import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import QuoteResultModal from './components/QuoteResultModal';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import ProcessGuide from './pages/ProcessGuide';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';

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

      <Routes>
        <Route path="/" element={<Home onQuoteResult={handleQuoteResult} />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/process-guide" element={<ProcessGuide />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

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
