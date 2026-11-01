import React, { useState } from "react";
import "./USLocationModal.css";

export default function USLocationModal({ isOpen, onClose }) {
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("Choose");

  if (!isOpen) return null;

  const handleApplyZip = (e) => {
    e.preventDefault();
    if (zipcode.trim()) {
      alert(`US Zip code applied: ${zipcode}`);
    } else {
      alert("Please enter a valid zip code");
    }
  };

  const handleDone = () => {
    alert(`Selected Country: ${country}`);
    onClose();
  };

  return (
    <div className="us-modal-overlay">
      <div className="us-modal-box">
        
        {/* Top Header */}
        <div className="us-modal-header">
          <h3>Choose your location</h3>
          <button className="us-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Subtitle */}
        <p className="us-subtitle">
          Delivery options and delivery speeds may vary for different locations
        </p>

        {/* Sign in Button */}
        <div className="us-signin-section">
          <button 
            className="us-signin-btn"
            onClick={() => alert("Redirecting to Sign in page")}
          >
            Sign in to see your addresses
          </button>
        </div>

        {/* Divider */}
        <div className="us-divider-wrapper">
          <span className="us-divider-text">or enter a US zip code</span>
        </div>

        {/* Zip Code Form */}
        <form onSubmit={handleApplyZip} className="us-zip-form">
          <input
            type="text"
            className="us-zip-input"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <button type="submit" className="us-apply-btn">Apply</button>
        </form>

        {/* Divider */}
        <div className="us-divider-wrapper">
          <span className="us-divider-text">or ship outside the US</span>
        </div>

        {/* Country Dropdown */}
        <div className="us-dropdown-section">
          <select 
            className="us-country-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Choose" disabled>Choose</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="UAE">United Arab Emirates</option>
          </select>
        </div>

        {/* Footer Done Button */}
        <div className="us-footer-section">
          <button className="us-done-btn" onClick={handleDone}>
            Done
          </button>
        </div>

      </div>
    </div>
  );
}