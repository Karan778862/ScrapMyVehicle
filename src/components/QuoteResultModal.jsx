import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function QuoteResultModal({ data, onClose }) {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!data) return null;

  const { brand, model, year, phone, estimate } = data;

  const handleConfirmPickup = () => {
    setBookingConfirmed(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!bookingConfirmed ? (
          <div>
            <div style={{ textAlign: 'center' }}>
              <div className="modal-badge-success">
                <CheckCircle2 size={16} />
                <span>Instant Valuation Generated!</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)' }}>
                Estimated Scrap Value
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--slate-500)' }}>
                Based on current steel scrap rate & reusable parts valuation
              </p>
            </div>

            {/* Valuation Display Box */}
            <div className="modal-valuation-box">
              <div className="modal-valuation-amount">
                {estimate.formattedRange}
              </div>
              <div className="modal-valuation-label">
                Guaranteed Highest Price | 100% Free Doorstep Pickup
              </div>
            </div>

            {/* Vehicle Summary Details */}
            <div className="modal-details-grid">
              <div className="detail-pill-box">
                <span className="detail-label">Vehicle</span>
                <span className="detail-val">{brand} {model}</span>
              </div>
              <div className="detail-pill-box">
                <span className="detail-label">Model Year</span>
                <span className="detail-val">{year}</span>
              </div>
              <div className="detail-pill-box">
                <span className="detail-label">Registered Phone</span>
                <span className="detail-val">+91 {phone}</span>
              </div>
              <div className="detail-pill-box">
                <span className="detail-label">RTO Certificate</span>
                <span className="detail-val" style={{ color: 'var(--primary-700)' }}>Included Free</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                onClick={handleConfirmPickup}
              >
                <span>Schedule Free Doorstep Pickup</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href={`tel:18007277669227`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  background: 'var(--slate-100)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--slate-800)'
                }}
              >
                <Phone size={16} color="var(--primary-600)" />
                <span>Call Valuation Officer (1800-72776-69227)</span>
              </a>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '6px', 
              marginTop: '16px',
              fontSize: '12px',
              color: 'var(--slate-500)'
            }}>
              <ShieldCheck size={14} color="var(--primary-600)" />
              <span>Government Registered RVSF Partner | Zero Liability Guarantee</span>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--primary-50)',
              color: 'var(--primary-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '8px' }}>
              Pickup Request Received!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--slate-600)', lineHeight: '1.5', marginBottom: '20px' }}>
              Thank you! Our local vehicle evaluation officer will call you on <strong>+91 {phone}</strong> within 15 minutes to confirm your preferred date and time for inspection & instant payout.
            </p>
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '12px' }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
