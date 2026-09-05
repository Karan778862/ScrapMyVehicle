import React, { useEffect } from 'react';
import { ShieldCheck, Truck, Banknote, FileCheck, Search, FileText, Camera, Trash2, Landmark, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: 1,
    title: 'Submit Scrapping Application',
    description: 'Start by submitting your vehicle details online. Our team will assist in initiating the official scrapping request on the government portal.',
    icon: FileText
  },
  {
    step: 2,
    title: 'Physical Vehicle Inspection',
    description: 'A certified evaluator will visit your location to inspect the vehicle and verify the submitted details and original documents.',
    icon: Search
  },
  {
    step: 3,
    title: 'Final Quote & Agreement',
    description: 'Based on the inspection, a final scrap value is offered. If accepted, the formal handover agreement (Form-2) is initiated.',
    icon: Banknote
  },
  {
    step: 4,
    title: 'Vehicle Handover',
    description: 'The vehicle is safely towed to our Registered Vehicle Scrapping Facility (RVSF) at zero cost to you.',
    icon: Truck
  },
  {
    step: 5,
    title: 'Certificate of Deposit (CoD)',
    description: 'Upon successful handover, an official Certificate of Deposit is generated, which can be used for tax benefits on new vehicles.',
    icon: FileCheck
  },
  {
    step: 6,
    title: 'Scientific Dismantling',
    description: 'The vehicle is drained of fluids, dismantled, and scrapped following strict eco-friendly environmental guidelines.',
    icon: Trash2
  },
  {
    step: 7,
    title: 'Digital Verification Upload',
    description: 'Live video and photographic evidence of the complete dismantling process are uploaded directly to the Vahan portal for transparency.',
    icon: Camera
  },
  {
    step: 8,
    title: 'Certificate of Scrapping & De-registration',
    description: 'The final Certificate of Vehicle Scrapping (CoVS) is issued, and the RTO officially de-registers the vehicle from their records.',
    icon: Landmark
  }
];

export default function ProcessGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="process-guide-page">
      {/* Header Banner */}
      <div className="process-header-banner">
        <div className="container">
          <span className="process-badge">Step-by-Step Guide</span>
          <h1>Vehicle Scrapping Process</h1>
          <p>A completely transparent, legal, and hassle-free process strictly adhering to the Vahan Parivahan guidelines.</p>
        </div>
      </div>

      <div className="container">
        <div className="process-content-wrapper">
          <div className="process-back-action">
            <Link to="/" className="btn-back-home">
              ← Back to Home
            </Link>
          </div>

          <div className="process-intro">
            <h2>The Official Scrapping Journey</h2>
            <p>
              ScrapMyVehicle is a Registered Vehicle Scrapping Facility (RVSF). We ensure every step of your vehicle's end-of-life journey is documented, legal, and environmentally responsible. Here is exactly what happens from the moment you request a quote.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="process-timeline">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="timeline-item">
                  <div className="timeline-number-col">
                    <div className="timeline-number">{step.step}</div>
                    {index < processSteps.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content-col">
                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <div className="timeline-icon-box">
                          <Icon size={24} />
                        </div>
                        <h3>{step.title}</h3>
                      </div>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="process-benefits-section">
            <h2>Why Follow the Official Portal Process?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <ShieldCheck size={32} className="benefit-icon" />
                <h4>100% Legal Protection</h4>
                <p>Complete RTO de-registration ensures you are free from any future legal or financial liabilities related to the scrapped vehicle.</p>
              </div>
              <div className="benefit-card">
                <CheckCircle size={32} className="benefit-icon" />
                <h4>New Vehicle Discounts</h4>
                <p>The Certificate of Deposit (CoD) you receive can be used to claim road tax rebates and manufacturer discounts on your next vehicle purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
