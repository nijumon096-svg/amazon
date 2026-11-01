import React from "react";
import "./KeepShopping.css";

function KeepShopping() {
 
  const products = [
    {
      id: 1,
      title: "iQOO Z11x 5G (Aurora Green, 8GB RAM, 128GB Storage)",
      rating: 4.2,
      reviews: "1,452",
      discount: "25%",
      price: "28,998",
      mrp: "38,999",
      img: "https://m.media-amazon.com/images/I/41QYIHVQi+L._MCnd_AC_.jpg",
    },
    {
      id: 2,
      title: "Redmi Note 15 5G (Mystic Purple, 8GB RAM, 256GB Storage)",
      rating: 4.0,
      reviews: "890",
      discount: "35%",
      price: "27,999",
      mrp: "42,999",
      img: "https://m.media-amazon.com/images/I/41cUWCOX+oL._MCnd_AC_.jpg",
    },
    {
      id: 3,
      title: "Apple iPhone 16 (128 GB) - Black",
      rating: 4.7,
      reviews: "3,210",
      discount: "14%",
      price: "75,900",
      mrp: "87,900",
      img: "https://m.media-amazon.com/images/I/31ckM6N8EyL._MCnd_AC_.jpg",
    },
    {
      id: 4,
      title: "Samsung Galaxy A56 5G (Awesome Blue, 8GB RAM, 128GB Storage)",
      rating: 4.3,
      reviews: "2,150",
      discount: "34%",
      price: "32,000",
      mrp: "48,999",
      img: "https://m.media-amazon.com/images/I/41glZk0BMcL._MCnd_AC_.jpg",
    },
  ];

  return (
    <div className="keep-shopping-container">
      {/* Header Title */}
      <div className="ks-header">
        <h2>Keep shopping for <span>Smartphones & basic mobiles</span></h2>
      </div>

      {/* Product Grid */}
      <div className="ks-grid">
        {products.map((item) => (
          <div className="ks-card" key={item.id}>
            <div className="ks-img-container">
              <img src={item.img} alt={item.title} />
            </div>
            
            <h4 className="ks-title">{item.title}</h4>

            <div className="ks-rating">
              <span className="stars">⭐⭐⭐⭐☆</span>
              <span className="reviews-count">{item.reviews}</span>
            </div>

            <div className="ks-pricing">
              <span className="discount-badge">-{item.discount}</span>
              <span className="price">₹{item.price}</span>
              <span className="mrp">M.R.P: ₹{item.mrp}</span>
            </div>

            <p className="delivery-info">FREE Delivery by <strong>Amazon</strong></p>

            <button className="ks-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeepShopping;