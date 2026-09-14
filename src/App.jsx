import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import FAQPage from './pages/FAQPage';
import AboutUs from './pages/AboutUs';
import LandingPage from './pages/LandingPage';
import CityLandingPage from './pages/CityLandingPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [quoteResultData, setQuoteResultData] = useState(null);
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing' || location.pathname.startsWith('/location/');
  const isAdminPage = location.pathname.startsWith('/admin');

  const handleQuoteResult = (data) => {
    setQuoteResultData(data);
  };

  const handleCloseModal = () => {
    setQuoteResultData(null);
  };

  return (
    <div className="app-container">
      {/* Hide headers on Admin page */}
      {!isAdminPage && (
        <>
          {/* 1. Top Announcement Bar - Hide on Landing Pages */}
          {!isLandingPage && <TopBar />}

          {/* 2. Main Header / Navigation */}
          <Navbar 
            onOpenQuoteModal={() => {
              document.getElementById('quote-form-card')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            isLandingPage={isLandingPage}
          />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home onQuoteResult={handleQuoteResult} />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/process-guide" element={<ProcessGuide />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/landing" element={<LandingPage onQuoteResult={handleQuoteResult} />} />
        <Route path="/location/:city" element={<CityLandingPage onQuoteResult={handleQuoteResult} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {/* Hide footer and floating actions on Admin page */}
      {!isAdminPage && (
        <>
          <Footer />
          <FloatingActions />
        </>
      )}

      {/* Interactive Modal */}
      {quoteResultData && (
        <QuoteResultModal
          data={quoteResultData}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
