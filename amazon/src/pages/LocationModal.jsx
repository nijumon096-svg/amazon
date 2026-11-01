import React, { useState } from "react";
import "./LocationModal.css";

export default function LocationModal({ isOpen, onClose }) {
    
  const [pincode, setPincode] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("default");

  if (!isOpen) return null; // മോഡൽ ക്ലോസ് ആണെങ്കിൽ കാണിക്കില്ല

  const handleApplyPincode = (e) => {
    e.preventDefault();
    if (pincode.trim()) {
      alert(`Pincode applied: ${pincode}`);
      onClose();
    } else {
      alert("Please enter a valid pincode");
    }
  };

  return (
    <div className="loc-modal-overlay">
      <div className="loc-modal-box">
        
        {/* Top Header */}
        <div className="loc-modal-header">
          <h3>Choose your location</h3>
          <button className="loc-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Subtitle */}
        <p className="loc-subtitle">
          Select a delivery location to see product availability and delivery options
        </p>

        {/* Saved Addresses List */}
      
        {/* Add Address Link */}
        <div className="loc-add-link">
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Navigate to add address page"); }}>
            Add an address or pick-up point
          </a>
        </div>

        {/* Divider / Pincode Section */}
        <div className="loc-divider-wrapper">
          <span className="loc-divider-text">or enter an Indian pincode</span>
        </div>

        {/* Pincode Input Form */}
        <form onSubmit={handleApplyPincode} className="loc-pincode-form">
          <input
            type="text"
            className="loc-pincode-input"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter pincode"
          />
          <button type="submit" className="loc-apply-btn">Apply</button>
        </form>

      </div>
    </div>
  );
}