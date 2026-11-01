import React from 'react';
import './ProductGrid.css';

export default function ProductGrid() {
  // Sample laptop products list
  const products = [
    {
      id: 1,
      title: "HP Smartchoice Victus, AMD Ryzen 7 7445HS, 6GB RTX 3050, 16GB...",
      rating: "3.5",
      reviews: "110",
      bought: "2K+ bought in past month",
      price: "1,04,990",
      mrp: "1,42,990",
      discount: "27% off",
      delivery: "FREE delivery Thu, 29 Oct",
      image: "https://m.media-amazon.com/images/I/71qyKXQTGVL._AC_UY327_QL65_.jpg"
    },
    {
      id: 2,
      title: "Acer Smartchoice Aspire One, AMD Ryzen 5-4300U, 8GB LPDDR5...",
      rating: "3.8",
      reviews: "114",
      bought: "500+ bought in past month",
      price: "45,990",
      mrp: "92,990",
      discount: "51% off",
      delivery: "FREE delivery Wed, 28 Oct",
      image: "https://m.media-amazon.com/images/I/61sfG3qfs7L._AC_UY327_QL65_.jpg"
    },
    {
      id: 3,
      title: "HP 15, AMD Ryzen 5 7520U (16GB DDR4, 512GB SSD) FHD...",
      rating: "4.0",
      reviews: "151",
      bought: "1K+ bought in past month",
      price: "69,990",
      mrp: "99,499",
      discount: "27% off",
      delivery: "FREE delivery Thu, 29 Oct",
      image: "https://m.media-amazon.com/images/I/71MbIVSIhAL._AC_UY327_QL65_.jpg"
    },
    {
      id: 4,
      title: "Lenovo IdeaPad Slim 3 13th Gen, Intel Core i5-13420H...",
      rating: "3.7",
      reviews: "72",
      bought: "1K+ bought in past month",
      price: "74,990",
      mrp: "1,18,890",
      discount: "37% off",
      delivery: "FREE delivery Sun, 1 Nov",
      image: "https://m.media-amazon.com/images/I/71qyKXQTGVL._AC_UL480_QL65_.jpg"
    }
  ];

  return (
    <div className="search-results-container">
      {/* Left Sidebar Filters */}
      <aside className="filter-sidebar">
        <h3>Delivery Day</h3>
        <label><input type="checkbox" /> Get It in Tomorrow</label>
        <label><input type="checkbox" /> Get It in 2 Days</label>

        <h3>Category</h3>
        <ul className="filter-list">
          <li>Computers & Accessories</li>
          <li>Laptops</li>
          <li>Traditional Laptops</li>
        </ul>

        <h3>Customer Review</h3>
        <div className="rating-filter">⭐⭐⭐⭐ & Up</div>
        <div className="rating-filter">⭐⭐⭐ & Up</div>
      </aside>

      {/* Right Product Grid */}
      <main className="product-grid-main">
        <h2>Results</h2>
        <p className="results-sub">Check each product page for other buying options.</p>
        
        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="badge">Great Indian Festival</div>
              <div className="product-img-container">
                <img src={item.image} alt={item.title} className="product-img" />
              </div>
              <h4 className="product-title">{item.title}</h4>
              <div className="product-rating">
                ⭐ {item.rating} <span className="reviews">({item.reviews})</span>
              </div>
              <div className="bought-text">{item.bought}</div>
              <div className="product-pricing">
                <span className="currency">₹</span>
                <span className="price-large">{item.price}</span>
                <span className="mrp">M.R.P: ₹{item.mrp}</span>
                <span className="discount">({item.discount})</span>
              </div>
              <div className="delivery-info">{item.delivery}</div>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}