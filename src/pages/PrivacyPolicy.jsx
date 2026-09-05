import React, { useEffect } from 'react';
import { ShieldCheck, Mail, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-container">
      <div className="terms-header-banner">
        <div className="container">
          <div className="terms-header-content">
            <span className="terms-badge">Data Security</span>
            <h1>Privacy Policy</h1>
            <p>How we handle, protect, and respect your personal information.</p>
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
              At <strong>ScrapMyVehicle.in</strong>, we take your privacy seriously. This policy explains what information we collect when you use our vehicle scrapping platform, why we collect it, and how we keep it secure. We ensure complete transparency so you can confidently use our services.
            </p>

            <div className="terms-section">
              <h2>1. Information Collection</h2>
              <p>
                When you visit our website, submit a quote request, or interact with our services, we may collect basic information required to facilitate the scrapping process. This includes your contact details and basic vehicle information. We do not stealthily collect personally identifiable data without your direct submission.
              </p>
            </div>

            <div className="terms-section">
              <h2>2. How We Use Your Data</h2>
              <p>
                The primary purpose of collecting your data is to provide you with an accurate quote, schedule pickups, and process legal RTO de-registration documents. Your data helps us ensure a smooth, compliant vehicle handover process.
              </p>
            </div>

            <div className="terms-section">
              <h2>3. Data Protection & Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information with any third-party marketing companies. 
              </p>
              <p>
                Your information is only shared when absolutely necessary to complete the service you requested (for example, generating RTO documents) or if we are legally obligated to disclose it by a valid court order or government agency.
              </p>
            </div>

            <div className="terms-section">
              <h2>4. International Privacy Standards</h2>
              <p>
                If any part of our processing requires interacting with global servers, we ensure that strict data protection laws are adhered to. We employ industry-standard encryption and security measures to prevent unauthorized access to the information you entrust us with.
              </p>
            </div>

            <div className="terms-section">
              <h2>5. Your Consent & Rights</h2>
              <p>
                By actively submitting your details for a vehicle quote, you consent to the processing of your data as described in this policy. If you wish to withdraw your application or request the deletion of your submitted data before the official scrapping process begins, please reach out to our team.
              </p>
            </div>

            <div className="terms-section">
              <h2>6. Policy Updates</h2>
              <p>
                We may periodically update this Privacy Policy to reflect changes in legal requirements or our internal processes. Any major updates will be prominently displayed on this page so you are always aware of how your data is handled.
              </p>
            </div>

            <div className="terms-contact-card">
              <div className="contact-card-icon">
                <ShieldCheck size={32} />
              </div>
              <div className="contact-card-text">
                <h3>Privacy Concerns? Contact Us.</h3>
                <p>If you have any questions regarding how your data is processed, our privacy team is ready to assist you.</p>
                <div className="contact-card-links">
                  <a href="mailto:privacy@scrapmyvehicle.in"><Mail size={16} /> privacy@scrapmyvehicle.in</a>
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
