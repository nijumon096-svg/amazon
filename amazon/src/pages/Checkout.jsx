import React, { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState(1);

  return (
    <div className="chk-container">
      
      {/* Top Navbar */}
      <div className="chk-navbar">
        <div className="chk-logo">
          <span className="amazon-logo">amazon</span><span className="domain">.in</span>
        </div>
        <div className="chk-title">
          Secure checkout <span>🔒</span>
        </div>
        <div className="chk-cart-icon">
          🛒 Cart
        </div>
      </div>

      {/* Main Body Layout */}
      <div className="chk-body-layout">
        
        {/* Left Sections Area */}
        <div className="chk-left-content">
          
          {/* Section 1: Select a delivery address */}
          <div className="chk-section-box">
            <h2 className="chk-section-title">Select a delivery address</h2>
            
            <div className="chk-sub-heading">Delivery addresses (2)</div>

            {/* Address Option 1 */}
            <div 
              className={`address-card ${selectedAddress === 1 ? "selected" : ""}`}
              onClick={() => setSelectedAddress(1)}
            >
              <div className="address-radio">
                <input 
                  type="radio" 
                  name="deliveryAddress" 
                  checked={selectedAddress === 1} 
                  onChange={() => setSelectedAddress(1)} 
                />
              </div>
              <div className="address-details">
                <div className="customer-name">Muhsin thangal</div>
                <div className="address-line">House, Kavanur, Malappuram, KERALA, 673639, India</div>
                <div className="phone-line">Phone number: 7034695849</div>
                <div className="address-actions">
                  <a href="#edit">Edit address</a> | <a href="#instructions">Add delivery instructions</a>
                </div>
              </div>
            </div>

            {/* Address Option 2 */}
            <div 
              className={`address-card ${selectedAddress === 2 ? "selected" : ""}`}
              onClick={() => setSelectedAddress(2)}
            >
              <div className="address-radio">
                <input 
                  type="radio" 
                  name="deliveryAddress" 
                  checked={selectedAddress === 2} 
                  onChange={() => setSelectedAddress(2)} 
                />
              </div>
              <div className="address-details">
                <div className="customer-name">Muhsin thangal</div>
                <div className="address-line">Raydan opposite, Areacod to manjeri, KIZHUPARAMBA, KERALA, 673639, India</div>
                <div className="phone-line">Phone number: 7034695849</div>
                <div className="address-actions">
                  <a href="#edit">Edit address</a> | <a href="#instructions">Add delivery instructions</a>
                </div>
              </div>
            </div>

            <div className="add-new-address-link">
              <a href="#new">+ Add a new delivery address</a>
            </div>

            <div className="mt-3">
              <button className="chk-yellow-btn">Deliver to this address</button>
            </div>
          </div>

          {/* Section 2: Payment method */}
          <div className="chk-section-box inactive">
            <h2 className="chk-section-title">Payment method</h2>
          </div>

          {/* Section 3: Review items and shipping */}
          <div className="chk-section-box inactive">
            <h2 className="chk-section-title">Review items and shipping</h2>
            <p className="chk-info-text">
              Need help? Check our <a href="#help">help pages</a> or <a href="#contact">contact us 24x7</a>
            </p>
            <p className="chk-info-text">
              When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card, debit card or net banking), you will be directed to your bank's website to complete your payment.
            </p>
            <p className="chk-info-text">
              See Amazon.in's <a href="#return">Return Policy</a>. <a href="#back">Back to cart</a>
            </p>
          </div>

        </div>

        {/* Right Sticky Order Summary Box */}
        <div className="chk-right-summary">
          <div className="summary-box">
            <button className="chk-yellow-btn w-100 mb-3">Deliver to this address</button>
            <hr />
            <div className="summary-row">
              <span>Items:</span>
              <span>--</span>
            </div>
            <div className="summary-row">
              <span>Delivery:</span>
              <span>--</span>
            </div>
            <div className="summary-row">
              <span>Marketplace Fee:</span>
              <span>--</span>
            </div>
            <hr />
            <div className="summary-total-row">
              <span>Order Total:</span>
              <span className="total-amount">--</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="chk-footer">
        <div className="back-to-top">Back to top</div>
        <div className="footer-content">
          <div className="footer-logo">
            <span className="amazon-logo">amazon</span>
            <span className="help-text">Help</span>
          </div>
          <div className="footer-links">
            <a href="#cond">Conditions of Use & Sale</a>
            <a href="#privacy">Privacy Notice</a>
            <a href="#interest">Interest-Based Ads</a>
          </div>
          <div className="copyright">
            © 1996-2026, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>

    </div>
  );
}