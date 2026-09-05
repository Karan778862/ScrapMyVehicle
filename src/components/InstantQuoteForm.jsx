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
      <div className="quote-card-header">
        <h3 className="quote-card-title">
          Get <span className="instant-word">Instant</span> Quote
        </h3>
        <p className="quote-card-subtitle">It's Fast, Free & Easy!</p>
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
        <div className="form-group">
          <input 
            type="tel"
            className="form-input"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 10);
              setMobileNumber(val);
              setErrorMessage('');
            }}
            id="vehicle-phone-input"
          />
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
        >
          <span>{isSubmitting ? 'Calculating Value...' : 'Get Free Quote'}</span>
          <ArrowRight size={18} />
        </button>

        {/* Privacy Note */}
        <div className="privacy-badge">
          <Lock size={14} color="#059647" />
          <span>Your details are 100% safe with us</span>
        </div>
      </form>
    </div>
  );
}
