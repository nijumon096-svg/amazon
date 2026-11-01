import React, { useState } from "react";
import "./AmazonBusiness.css";

function AmazonBusiness() {
  const [gstNumber, setGstNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gstNumber) {
      alert("ദയവായി GST നമ്പർ നൽകുക!");
      return;
    }
    alert(`GST Number Submitted: ${gstNumber}`);
  };

  return (
    <div className="ab-container">
      {/* Top Navigation Bar */}
      <div className="ab-navbar">
        <div className="ab-logo">
          <span className="amazon-text">amazon</span>
          <span className="business-text">business</span>
        </div>
        <div className="ab-cancel">CANCEL</div>
      </div>

      {/* Main Content Box */}
      <div className="ab-main-wrapper">
        <div className="ab-card">
          {/* Left Side: Form */}
          <div className="ab-left-section">
            <h2>Let's create your free Amazon Business Account</h2>
            <p className="ab-subtitle">
              <strong>Save up to 18%</strong> with business pricing and GST input tax credit
            </p>

            <form onSubmit={handleSubmit}>
              <label>GST Number</label>
              <input
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                placeholder=""
              />
              <button type="submit" className="ab-submit-btn">Submit</button>
            </form>

            <div className="ab-register-link">
              Register with Udyam / BPAN / FSSAI <span>▼</span>[cite: 7]
            </div>
          </div>

          {/* Right Side: Benefits */}
          <div className="ab-right-section">
            <h2>Reshape buying for your organisation</h2>

            <div className="ab-benefit-item">
              <div className="ab-icon">🏷️</div>
              <div>
                <h3>Business Savings</h3>
                <p>Save big with exclusive business prices and discounts[cite: 7]</p>
              </div>
            </div>

            <div className="ab-benefit-item">
              <div className="ab-icon">🛒</div>
              <div>
                <h3>Buy Now, Pay Later</h3>
                <p>Enjoy upto ₹60,000 instant credit*[cite: 7]</p>
              </div>
            </div>

            <div className="ab-benefit-item">
              <div className="ab-icon">🔍</div>
              <div>
                <h3>GST Invoice</h3>
                <p>Save upto 18% with GST Input Tax Credit[cite: 7]</p>
              </div>
            </div>

            <div className="ab-learn-more">
              Learn more about Amazon Business[cite: 7]
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="ab-footer">
        <p>
          Do you need some help? Contact business customer service[cite: 7]. Read our conditions of use[cite: 7] and privacy notice[cite: 7].
        </p>
        <p>© 1996-2026, Amazon.com, or its affiliates[cite: 7]</p>
      </div>
    </div>
  );
}

export default AmazonBusiness;