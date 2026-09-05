import React from 'react';
import { ShieldCheck, Mail, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-container">
      <div className="terms-header-banner">
        <div className="container">
          <div className="terms-header-content">
            <span className="terms-badge">Legal Documentation</span>
            <h1>Terms & Conditions</h1>
            <p>Please read these terms carefully before using ScrapMyVehicle services.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="terms-content-wrapper">
          <div className="terms-back-action">
            <Link to="/" className="btn-back-home">
              ← Back to Home
            </Link>
          </div>

          <div className="terms-document">
            <p className="terms-intro">
              Welcome to <strong>ScrapMyVehicle.in</strong>. These terms govern your access to and use of our vehicle scrapping services. By booking a quote or handing over your vehicle, you agree to comply with the terms laid out below. We have kept them simple and transparent.
            </p>

            <div className="terms-section">
              <h2>1. General Eligibility</h2>
              <p>
                To utilize our services, you must be at least 18 years of age and hold the legal right (or authorized power of attorney) to scrap the submitted vehicle.
              </p>
            </div>

            <div className="terms-section">
              <h2>2. Scope of Services</h2>
              <p>
                ScrapMyVehicle provides authorized end-of-life vehicle (ELV) scrapping, dismantling, and recycling services. We also assist in securing the Certificate of Destruction (CoD) and managing the RTO de-registration process.
              </p>
            </div>

            <div className="terms-section">
              <h2>3. Vehicle Condition & Documentation</h2>
              <ul>
                <li>You must provide valid and original ownership documents at the time of pickup.</li>
                <li>The physical condition of the vehicle must generally match the details provided during the quote process.</li>
                <li>We reserve the right to reject any vehicle if we find discrepancies in legal ownership or if it is involved in any pending litigation.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Legal Undertakings (RVSF Compliance)</h2>
              <p>
                <strong>By the Owner:</strong> You declare that the vehicle is free from any criminal records, pending traffic challans, or financial hypothecation (unless an NOC is provided). You are liable for any incidents involving the vehicle prior to handing it over.
              </p>
              <p>
                <strong>By ScrapMyVehicle:</strong> Once the vehicle is officially handed over and documented, we take full responsibility for its safe and legal dismantling in accordance with government regulations.
              </p>
            </div>

            <div className="terms-section">
              <h2>5. Valuation & Payments</h2>
              <p>
                The initial online quote is an estimate. Final valuation is confirmed upon physical inspection. Payments are initiated instantly upon successful verification of the vehicle and its documents, before the vehicle is towed.
              </p>
            </div>

            <div className="terms-section">
              <h2>6. User Responsibilities</h2>
              <p>
                You agree to provide accurate information during the booking process. Any deliberate misrepresentation of the vehicle's legal status may result in immediate cancellation and reporting to authorities.
              </p>
            </div>

            <div className="terms-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                While we ensure absolute care during the process, ScrapMyVehicle shall not be held liable for any indirect or consequential damages arising from the use of our services. Our maximum liability is limited to the agreed scrap value of the vehicle.
              </p>
            </div>

            <div className="terms-section">
              <h2>8. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising out of these services shall be subject to the exclusive jurisdiction of the local courts.
              </p>
            </div>

            <div className="terms-contact-card">
              <div className="contact-card-icon">
                <ShieldCheck size={32} />
              </div>
              <div className="contact-card-text">
                <h3>Still have questions about our terms?</h3>
                <p>Our legal and support team is here to clarify any doubts.</p>
                <div className="contact-card-links">
                  <a href="mailto:info@scrapmyvehicle.in"><Mail size={16} /> info@scrapmyvehicle.in</a>
                  <a href="tel:18007277669227"><PhoneCall size={16} /> 1800-72776-69227</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
