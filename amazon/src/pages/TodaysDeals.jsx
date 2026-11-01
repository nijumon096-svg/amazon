import React from "react";
import "./TodaysDeals.css";

export default function TodaysDeals() {
  
  const products = [
    {
      id: 1,
      title: "Ghar Soaps Sandalwood & Saffron Bath Bar, 200g (Pack...",
      price: "229",
      mrp: "309",
      discount: "26% off",
      tag: "Mega Festival Deal",
      rating: "3.8",
      reviews: "46K",
      img: "https://images-eu.ssl-images-amazon.com/images/I/71xIbwtt23L._AC_UL330_SR330,330_.jpg"
    },
    {
      id: 2,
      title: "One94Store Artificial Leaf Curtain Lights - 200 LED War...",
      price: "279",
      mrp: "999",
      discount: "72% off",
      tag: "Great Indian Festival",
      rating: "4.0",
      reviews: "6.2K",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61ULimPWODL._AC_UL330_SR330,330_.jpg"
    },
    {
      id: 3,
      title: "Wakefit 100% Waterproof Premium Terry Cotton Mattr...",
      price: "724",
      mrp: "1,529",
      discount: "53% off",
      tag: "Mega Festival Deal",
      rating: "4.3",
      reviews: "1.4K",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61x2YvxqdGL._AC_UL330_SR330,330_.jpg"
    },
    {
      id: 4,
      title: "Amazon Brand - Solimo Wax Tealight Candles (Set of 100,...",
      price: "319",
      mrp: "500",
      discount: "36% off",
      tag: "Great Indian Festival",
      rating: "4.2",
      reviews: "46.6K",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61T18EfkX0L._AC_UL330_SR330,330_.jpg"
    },
    {
      id: 5,
      title: "Lux Radiant Glow Bathing Soap infused with Vitamin C...",
      price: "179",
      mrp: "345",
      discount: "48% off",
      tag: "Great Indian Festival",
      rating: "4.3",
      reviews: "7.9K",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61Di24QT6GL._AC_UL330_SR330,330_.jpg"
    }
  ];


  const priceDeals = [
    { title: "Under", price: "₹99", bg: "#9c27b0" },
    { title: "Under", price: "₹199", bg: "#0d47a1" },
    { title: "Under", price: "₹499", bg: "#ad1457" },
    { title: "OMG Price Drop", price: "", bg: "#01579b" }
  ];

  return (
    <div className="gif-container">
      
      {/* Top Banner Section */}
      <div className="gif-hero-banner">
        <div className="gif-top-header">
          <span className="festival-title">Great Indian Festival</span>
          <span className="diwali-badge">Diwali Edition</span>
        </div>
        
        {/* HDFC Bank Offer Strip */}
        <div className="hdfc-banner-box">
          <div className="bank-logo-area">
            <span className="hdfc-text">HDFC BANK</span>
            <span className="festive-treats">FESTIVE TREATS</span>
          </div>
          <div className="bank-offer-text">
            <strong>10% Instant Discount*</strong> up to ₹24,800 off on Credit Card and Credit Card EMI
          </div>
        </div>

        {/* Sub Offers Strip */}
        <div className="sub-offer-strip">
          <span>💳 Unlimited 5% cashback* with Amazon Pay ICICI Bank credit card</span>
          <span>💳 10% back on EMIs* with Amazon Pay Later</span>
        </div>

        {/* Weekend Special Strip */}
        <div className="weekend-special-strip">
          <span className="limited-tag">Limited period offer</span>
          <span><strong>Weekend Special</strong> Extra ₹250 back on orders above ₹2,500*</span>
        </div>
      </div>

      {/* Navigation Sub-Categories Bar */}
      <div className="gif-nav-bar">
        <button className="nav-arrow-btn">&lt;</button>
        <span className="nav-item active">For you</span>
        <span className="nav-item">Deals in focus</span>
        <span className="nav-item">Mobiles</span>
        <span className="nav-item">Electronics</span>
        <span className="nav-item">Mobile Accessories</span>
        <span className="nav-item">Headphones, Smartwatch & Accessories</span>
        <span className="nav-item">Large Appliances</span>
        <span className="nav-item">Smart 1</span>
        <button className="nav-arrow-btn">&gt;</button>
      </div>

      {/* Main Content Layout (Sidebar Filters + Products Grid) */}
      <div className="gif-main-layout">
        
        {/* Left Filter Sidebar */}
        <div className="gif-sidebar">
          <div className="filter-group">
            <h5 className="filter-title">Beauty</h5>
            <a href="#" className="filter-link">See more</a>
          </div>

          <div className="filter-group">
            <h5 className="filter-title">Brands</h5>
            <label><input type="checkbox" /> TEAKWOOD LEATHERS</label>
            <label><input type="checkbox" /> GHAR SOAPS</label>
            <label><input type="checkbox" /> One94Store</label>
            <label><input type="checkbox" /> Wakefit</label>
            <a href="#" className="filter-link">See more</a>
          </div>

          <div className="filter-group">
            <h5 className="filter-title">Customer Reviews</h5>
            <label><input type="radio" name="review" defaultChecked /> All</label>
            <label><input type="radio" name="review" /> ⭐⭐⭐⭐⭐ and up</label>
          </div>

          <div className="filter-group">
            <h5 className="filter-title">Price</h5>
            <div className="price-slider-mock">₹10 - ₹1,000</div>
          </div>
        </div>

        {/* Right Products Area */}
        <div className="gif-content-area">
          
          {/* Products Grid Row 1 */}
          <div className="gif-products-grid">
            {products.map((item) => (
              <div className="gif-product-card" key={item.id}>
                <div className="product-img-box">
                  <img src={item.img} alt={item.title} />
                  <button className="quick-add-btn">+</button>
                </div>
                <div className="product-info">
                  <div className="discount-badge-row">
                    <span className="badge-off">{item.discount}</span>
                    <span className="badge-deal">{item.tag}</span>
                  </div>
                  <div className="product-pricing">
                    <span className="currency">₹</span>
                    <span className="price-amt">{item.price}</span>
                    <span className="mrp-text">M.R.P.: <s>₹{item.mrp}</s></span>
                  </div>
                  <p className="product-title-text">{item.title}</p>
                  <div className="product-rating-row">
                    <span className="stars">★★★★☆</span>
                    <span className="review-count">({item.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shop Deals By Price Section */}
          <div className="deals-by-price-section">
            <h3 className="section-heading">Shop deals by price</h3>
            <div className="price-deals-grid">
              {priceDeals.map((deal, index) => (
                <div className="price-deal-card" style={{ backgroundColor: deal.bg }} key={index}>
                  <h4>{deal.title}</h4>
                  <h2>{deal.price}</h2>
                  <div className="deal-sparkles">✨</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}