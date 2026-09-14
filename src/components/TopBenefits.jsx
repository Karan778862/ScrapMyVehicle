import React from 'react';
import { Banknote, Truck, ShieldCheck } from 'lucide-react';

export default function TopBenefits() {
  return (
    <section className="top-benefits-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Why Scrap With Us</span>
          <h2 className="section-title">The Smartest Way to Scrap Your Vehicle</h2>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper bg-green-light">
                <Banknote size={32} className="text-green" />
              </div>
              <h3 className="benefit-title">Instant Cash Payment</h3>
              <p className="benefit-desc">
                No waiting, no haggling. Get paid instantly via cash or bank transfer on the spot when we pick up your vehicle.
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper bg-blue-light">
                <Truck size={32} className="text-blue" />
              </div>
              <h3 className="benefit-title">Free Doorstep Towing</h3>
              <p className="benefit-desc">
                Whether your car is running or not, our flatbed tow trucks will pick it up from your location completely free of cost.
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper bg-purple-light">
                <ShieldCheck size={32} className="text-purple" />
              </div>
              <h3 className="benefit-title">100% Legal RTO Process</h3>
              <p className="benefit-desc">
                We handle all the legal headaches. You will receive an official Certificate of Deposit (CoD) ensuring you have zero future liabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
