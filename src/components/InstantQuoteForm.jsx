import React, { useState } from 'react';
import { vehicleBrands, vehicleYears, calculateScrapEstimate } from '../data/vehiclesData';
import { ArrowRight, Lock, Sparkles, Car, Bike, Truck, Tractor, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InstantQuoteForm({ onQuoteResult }) {
  const [formTab, setFormTab] = useState('quote'); // 'quote' | 'callback'

  // Quote Form State
  const [vehicleType, setVehicleType] = useState('Car');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Callback Form State
  const [callbackData, setCallbackData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);
  const [callbackError, setCallbackError] = useState('');

  // Get available brands for selected type
  const brandsForType = vehicleBrands[vehicleType] || [];

  // Get available models for selected brand
  const currentBrandObj = brandsForType.find(b => b.name === selectedBrand);
  const availableModels = currentBrandObj ? currentBrandObj.models : [];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(''); // Reset model when brand changes
    setErrorMessage('');
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!selectedBrand) {
      setErrorMessage('Please select your vehicle brand.');
      return;
    }
    if (!selectedModel) {
      setErrorMessage('Please select your vehicle model.');
      return;
    }
    if (!selectedYear) {
      setErrorMessage('Please select manufacturing year.');
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!mobileNumber || !phoneRegex.test(mobileNumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Calculate instant estimation
    const estimate = calculateScrapEstimate(vehicleType, selectedBrand, selectedModel, selectedYear);

    // Send data to Google Sheet silently
    try {
      fetch('https://script.google.com/macros/s/AKfycbz4K5TKzqA85IqSAeIssbf8YoYfCb5vlh7Fk8d5AdPVkrCco_or-qkJYM4082H0bCJl/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          FormType: 'Instant Quote',
          VehicleType: vehicleType,
          Brand: selectedBrand,
          Model: selectedModel,
          Year: selectedYear,
          Phone: mobileNumber,
          Estimate: estimate
        })
      });
    } catch (err) {
      console.error('Error submitting to sheet:', err);
    }

    // Trigger confetti celebration effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#059647', '#10b981', '#34d399', '#f59e0b']
    });

    setTimeout(() => {
      setIsSubmitting(false);
      if (onQuoteResult) {
        onQuoteResult({
          brand: selectedBrand,
          model: selectedModel,
          year: selectedYear,
          phone: mobileNumber,
          estimate
        });
      }
    }, 400);
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    if (!callbackData.name) {
      setCallbackError('Please enter your name.');
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!callbackData.phone || !phoneRegex.test(callbackData.phone)) {
      setCallbackError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setCallbackError('');
    setIsSubmittingCallback(true);
    
    try {
      await fetch('https://script.google.com/macros/s/AKfycbz4K5TKzqA85IqSAeIssbf8YoYfCb5vlh7Fk8d5AdPVkrCco_or-qkJYM4082H0bCJl/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          FormType: 'Callback Request',
          Name: callbackData.name,
          Email: callbackData.email,
          Phone: callbackData.phone,
          Message: callbackData.message
        })
      });
      
      alert('Thank you! Your callback request has been received.');
      setCallbackData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setCallbackError('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setIsSubmittingCallback(false);
    }
  };

  return (
    <div className="quote-card" id="quote-form-card">
      <div className="quote-card-header" style={{ marginBottom: '16px' }}>
        <h3 className="quote-card-title" style={{ fontSize: '24px', color: '#1f2937', textAlign: 'center' }}>
          {formTab === 'quote' ? 'Get an Instant Valuation' : 'Request a Callback'}
        </h3>
      </div>

      <div className="form-tabs">
        <button 
          className={`form-tab-btn ${formTab === 'quote' ? 'active' : ''}`}
          onClick={() => setFormTab('quote')}
        >
          Instant Quote
        </button>
        <button 
          className={`form-tab-btn ${formTab === 'callback' ? 'active' : ''}`}
          onClick={() => setFormTab('callback')}
        >
          Callback
        </button>
      </div>

      {formTab === 'quote' && (
        <form onSubmit={handleQuoteSubmit} className="quote-form">
          {/* Vehicle Type */}
          <div className="form-group vehicle-type-group">
            <label className="vehicle-type-label">Vehicle Type*</label>
            <div className="vehicle-type-options">
              {[
                { id: 'Car', icon: Car, label: 'Car' },
                { id: 'Bike', icon: Bike, label: 'Bike' },
                { id: 'Truck', icon: Truck, label: 'Truck' },
                { id: '3 Wheeler', icon: Tractor, label: '3 Wheeler' }
              ].map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    type="button"
                    className={`vehicle-type-btn ${vehicleType === type.id ? 'active' : ''}`}
                    onClick={() => {
                      setVehicleType(type.id);
                      setSelectedBrand('');
                      setSelectedModel('');
                    }}
                  >
                    <Icon size={18} />
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="quote-inputs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '8px', marginBottom: '8px' }}>
            {/* Vehicle Brand */}
            <div className="form-group">
              <select 
                className="form-select"
                value={selectedBrand}
                onChange={handleBrandChange}
                id="vehicle-brand-select"
              >
                <option value="">Select Vehicle Brand</option>
                {brandsForType.map((brand) => (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle Model */}
            <div className="form-group">
              <select 
                className="form-select"
                value={selectedModel}
                onChange={(e) => {
                  setSelectedModel(e.target.value);
                  setErrorMessage('');
                }}
                disabled={!selectedBrand}
                id="vehicle-model-select"
              >
                <option value="">
                  {selectedBrand ? 'Select Vehicle Model' : 'Select Brand First'}
                </option>
                {availableModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle Year */}
            <div className="form-group">
              <select 
                className="form-select"
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setErrorMessage('');
                }}
                id="vehicle-year-select"
              >
                <option value="">Select Vehicle Year</option>
                {vehicleYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Number */}
            <div className="form-group" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '6px', color: '#059647', fontWeight: 'bold', fontSize: '15px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#059647" stroke="#059647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91</span>
              </div>
              <input 
                type="tel"
                className="form-input"
                placeholder="Phone"
                value={mobileNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setMobileNumber(val);
                  setErrorMessage('');
                }}
                id="vehicle-phone-input"
                style={{ paddingLeft: '75px' }}
              />
            </div>
          </div>

          {errorMessage && (
            <div style={{ color: '#ef4444', fontSize: '12.5px', fontWeight: 600, textAlign: 'center' }}>
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn-quote-submit"
            disabled={isSubmitting}
            id="submit-quote-btn"
            style={{ marginTop: '12px' }}
          >
            <span>{isSubmitting ? 'Calculating Value...' : 'Check Value'}</span>
          </button>
        </form>
      )}

      {formTab === 'callback' && (
        <form onSubmit={handleCallbackSubmit} className="quote-form callback-form" style={{ marginTop: '8px' }}>
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', marginBottom: '6px', display: 'block' }}>Your Name*</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Rahul Sharma" 
              required 
              value={callbackData.name} 
              onChange={(e) => setCallbackData({...callbackData, name: e.target.value})} 
            />
          </div>
          
          <div className="quote-inputs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div className="form-group">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', marginBottom: '6px', display: 'block' }}>Your Email</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="rahul@example.com" 
                value={callbackData.email} 
                onChange={(e) => setCallbackData({...callbackData, email: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', marginBottom: '6px', display: 'block' }}>Phone No.*</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="9876543210" 
                required 
                maxLength="10"
                value={callbackData.phone} 
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setCallbackData({...callbackData, phone: val});
                  setCallbackError('');
                }} 
              />
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', marginBottom: '6px', display: 'block' }}>Message</label>
            <textarea 
              className="form-input" 
              rows="3" 
              placeholder="Tell us about your vehicle..." 
              style={{ resize: 'none', height: 'auto', padding: '12px' }}
              value={callbackData.message} 
              onChange={(e) => setCallbackData({...callbackData, message: e.target.value})}
            ></textarea>
          </div>

          {callbackError && (
            <div style={{ color: '#ef4444', fontSize: '12.5px', fontWeight: 600, textAlign: 'center', marginBottom: '12px' }}>
              {callbackError}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-quote-submit"
            disabled={isSubmittingCallback}
          >
            <span>{isSubmittingCallback ? 'Submitting...' : 'Request a Callback'}</span>
          </button>
        </form>
      )}

      {/* Privacy Note */}
      <div className="privacy-badge" style={{ justifyContent: 'center', marginTop: '16px', padding: '10px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309' }}>
          <AlertCircle size={16} />
          <span style={{ fontWeight: '600', fontSize: '13px' }}>Note: We only scrap vehicles. No spare parts or resale.</span>
        </div>
      </div>
    </div>
  );
}
