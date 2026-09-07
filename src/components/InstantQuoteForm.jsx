import React, { useState } from 'react';
import { vehicleBrands, vehicleYears, calculateScrapEstimate } from '../data/vehiclesData';
import { ArrowRight, Lock, Sparkles, Car, Bike, Truck, Tractor } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InstantQuoteForm({ onQuoteResult }) {
  const [vehicleType, setVehicleType] = useState('Car');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = (e) => {
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
    if (!mobileNumber || mobileNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Calculate instant estimation
    const estimate = calculateScrapEstimate(selectedBrand, selectedModel, selectedYear);

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

  return (
    <div className="quote-card" id="quote-form-card">
      <div className="quote-card-header" style={{ marginBottom: '24px' }}>
        <h3 className="quote-card-title" style={{ fontSize: '24px', color: '#1f2937' }}>
          Get an Instant Valuation
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="quote-form">
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

        {/* Privacy Note */}
        <div className="privacy-badge" style={{ justifyContent: 'center', marginTop: '12px', padding: '0' }}>
          <span style={{ color: '#a52a2a', fontWeight: 'bold', fontSize: '15px' }}>Contact only for scrapping, no resale.</span>
        </div>
      </form>
    </div>
  );
}
