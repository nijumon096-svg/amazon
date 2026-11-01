import React, { useState } from "react";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [selectedStyle, setSelectedStyle] = useState("wifi-only");

  return (
    <div className="pd-container">
      
      {/* Breadcrumb / Top Category Trail */}
      <div className="pd-breadcrumb">
        Electronics Accessories › Laptops & Accessories › TV & Home Entertainment
      </div>

      {/* Main Layout (Left Images | Center Info | Right Buy Box) */}
      <div className="pd-main-layout">
        
        {/* Left Column: Thumbnails & Main Image */}
        <div className="pd-image-section">
         
          <div className="pd-main-img-box">
            <img src="https://m.media-amazon.com/images/I/71b16BnVcUL._SX679_.jpg" alt="OnePlus Pad Lite" />
          </div>
        </div>

        {/* Center Column: Product Details & Specs */}
        <div className="pd-info-section">
          <h1 className="pd-product-title">
            OnePlus Pad Lite, 11-inch (27.94 CM), LCD, 6GB RAM, 128GB ROM, WiFi, Quad Speakers, 9340mAh Battery, Blue, Not AI Enabled
          </h1>
          <a href="#" className="pd-store-link">Visit the OnePlus Store</a>

          <div className="pd-rating-row">
            <span className="stars">4.7 ★★★★★</span>
            <span className="ratings-count">(4)</span>
            <span className="divider">|</span>
            <span className="search-page-text">Search this page</span>
          </div>

          <div className="amazon-choice-badge">
            <span>Amazon's Choice</span>
          </div>

          <div className="bought-stats">
            400+ bought in past month
          </div>

          <hr />

          {/* Pricing Box */}
          <div className="pd-price-box">
            <span className="discount-tag">-25%</span>
            <span className="current-price">₹22,499</span>
          </div>
          <div className="mrp-box">
            M.R.P.: <s>₹29,999</s>
          </div>
          <div className="tax-text">Inclusive of all taxes</div>

          {/* Style Selector (Wifi-only vs Wifi+LTE) */}
          <div className="style-selector-section">
            <label>Style Name: <strong>{selectedStyle === "wifi-only" ? "Wifi-only" : "Wifi+LTE"}</strong></label>
            <div className="style-btns">
              <button 
                className={`style-btn ${selectedStyle === "wifi-only" ? "active" : ""}`}
                onClick={() => setSelectedStyle("wifi-only")}
              >
                <span className="s-name">Wifi-only</span>
                <span className="s-price">₹22,499.00</span>
                <span className="s-mrp"><s>₹29,999.00</s></span>
              </button>
              <button 
                className={`style-btn ${selectedStyle === "wifi+lte" ? "active" : ""}`}
                onClick={() => setSelectedStyle("wifi+lte")}
              >
                <span className="s-name">Wifi+LTE</span>
                <span className="s-price">₹23,999.00</span>
                <span className="s-mrp"><s>₹34,999.00</s></span>
              </button>
            </div>
          </div>

          {/* Product Specifications Table */}
          <div className="pd-specs-table">
            <div className="spec-row"><span className="spec-label">Brand</span><span className="spec-val">OnePlus</span></div>
            <div className="spec-row"><span className="spec-label">Model Name</span><span className="spec-val">Pad Lite</span></div>
            <div className="spec-row"><span className="spec-label">Memory Storage Capacity</span><span className="spec-val">128 GB</span></div>
            <div className="spec-row"><span className="spec-label">Screen Size</span><span className="spec-val">27.94 Centimetres</span></div>
            <div className="spec-row"><span className="spec-label">Display Resolution Maximum</span><span className="spec-val">1920*1200</span></div>
          </div>

          <hr />

          {/* About this item */}
          <div className="pd-about-section">
            <h3>About this item</h3>
            <ul>
              <li><strong>DISPLAY:</strong> Triple your phone's real estate with a 27.94cm (11 inch) Massive Display; 500 nits brightness; 1 billion colors with 1920x1200 resolution; 16:10 Screen-to-body ratio and 90 Hz refresh rate.</li>
              <li><strong>STORAGE:</strong> 6GB RAM, 128GB ROM.</li>
              <li><strong>SPEAKER:</strong> 16:10 cinematic aspect ratio; All around sound; Four Hi-Res Audio certified speakers dance with the OnePlus exclusive Omnibearing Sound Field for immersive, cinematic sound that surrounds.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Buy Box */}
        <div className="pd-buybox">
          <div className="buybox-price">₹22,499.00</div>
          <div className="buybox-delivery-info">
            FREE delivery <strong>Wednesday, 4 November</strong>. Order within <strong>4 hrs 41 mins</strong>.
          </div>
          <div className="buybox-location">
            📍 Deliver to Kochi 682507
          </div>
          <div className="stock-status">In stock</div>

          <div className="buybox-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>

          <div className="seller-info">
            <p>Ships from Amazon</p>
            <p>Sold by Clicktech Retail Private Ltd</p>
          </div>
        </div>

      </div>

    </div>
  );
}