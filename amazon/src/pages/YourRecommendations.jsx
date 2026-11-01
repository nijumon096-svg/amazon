import React from "react";
import "./YourRecommendations.css";

function YourRecommendations() {

  const products = [
    {
      id: 1,
      title: "Cetaphil Sun SPF 50+ Sunscreen Light Gel 50ml",
      rating: 4.4,
      reviews: "4,913",
      price: "1,073",
      delivery: "FREE delivery Sat, 31 Oct",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61i+MR6iwkL._AC_UL381_SR381,381_.jpg",
    },
    {
      id: 2,
      title: "OnePlus Nord CE5 Lite | 8GB+128GB | Hyper Black",
      rating: 4.2,
      reviews: "1,133",
      price: "20,499",
      mrp: "25,999",
      delivery: "FREE delivery Sat, 31 Oct",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61T18EfkX0L._AC_UL381_SR381,381_.jpg",
    },
    {
      id: 3,
      title: "Lifang Foldable Kids Kick Scooter with LED Wheels & Height Adjustment",
      rating: 3.9,
      reviews: "8,915",
      price: "1,549",
      mrp: "2,999",
      delivery: "FREE delivery Tue, 3 Nov",
      img: "https://images-eu.ssl-images-amazon.com/images/I/618MDa4NJoL._AC_UL381_SR381,381_.jpg",
    },
    {
      id: 4,
      title: "Amazon Brand - Presto! Garbage Bags | Medium | 180 Count",
      rating: 4.2,
      reviews: "54,051",
      price: "245",
      mrp: "499",
      delivery: "FREE delivery Sat, 31 Oct on ₹499 of items",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61fn1xtHO4L._AC_UL381_SR381,381_.jpg",
    },
    {
      id: 5,
      title: "Next Toppers CBSE Class 10 English Language and Literature",
      rating: 4.7,
      reviews: "270",
      price: "369",
      mrp: "450",
      delivery: "FREE delivery Wed, 4 Nov on ₹499 of items",
      img: "https://images-eu.ssl-images-amazon.com/images/I/81DHnBw8fML._AC_UL381_SR381,381_.jpg",
    },
  ];

  return (
    <div className="top-picks-container">
      {/* Top Navigation Links */}
      <div className="tp-nav-tabs">
        <span className="tp-tab active">Your Amazon.in</span>
        <span className="tp-tab">Your Browsing History</span>
        <span className="tp-tab">Recommended For You</span>
        <span className="tp-tab">Improve Your Recommendations</span>
        <span className="tp-tab">Your Profile</span>
        <span className="tp-tab">Learn More</span>
      </div>

      {/* Header Section */}
      <div className="tp-header">
        <h2>Top picks for you</h2>
      </div>

      {/* Products Grid */}
      <div className="tp-grid">
        {products.map((item) => (
          <div className="tp-card" key={item.id}>
            <div className="tp-img-container">
              <img src={item.img} alt={item.title} />
            </div>

            <h4 className="tp-title">{item.title}</h4>

            <div className="tp-rating">
              <span className="tp-stars">⭐⭐⭐⭐☆</span>
              <span className="tp-reviews">{item.reviews}</span>
            </div>

            <div className="tp-pricing">
              <span className="tp-currency">₹</span>
              <span className="tp-price">{item.price}</span>
              {item.mrp && <span className="tp-mrp">M.R.P: ₹{item.mrp}</span>}
            </div>

            <p className="tp-delivery">{item.delivery}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourRecommendations;