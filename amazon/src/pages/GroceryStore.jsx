import React from "react";
import "./GroceryStore.css";

export default function GroceryStore() {
  // Top Category Icons Data
  const topCategories = [
    { title: "Shop all deals", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/jupiter/rework/Grocery_Halos_copy._SS300_QL85_.jpg" },
    { title: "Same day delivery", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/topstore/Halo_Speed_Delivery._SS300_QL85_.jpg" },
    { title: "Gifting store", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/jupiter/rework/Grocery_Halos_01._SS300_QL85_.jpg" },
    { title: "Dry fruits & nuts", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/jupiter/rework/Grocery_Halos_04._SS300_QL85_.jpg" },
    { title: "Tea & coffee", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/Grocery_Halos_05._SS300_QL85_.jpg" },
    { title: "Oils & ghee", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/Grocery_Halos_06._SS300_QL85_.jpg" },
    { title: "Breakfast essentials", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/jupiter/rework/Grocery_Halos_02._SS300_QL85_.jpg" },
    { title: "Rice & pulses", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/jupiter/WD/rec/QC/lifestyle/Grocery_Halos_copy._SS300_QL85_.jpg" },
    { title: "Sweet treats", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/Grocery_Halos_09._SS300_QL85_.jpg" }
  ];

  // Gifting Special Cards
  const giftingCategories = [
    { title: "Chocolate hampers", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_Gifting_01.jpg" },
    { title: "Dry fruits hampers", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_Gifting_02.jpg" },
    { title: "Gourmet hampers", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_Gifting_03.jpg" },
    { title: "Beverage hampers", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_Gifting_04.jpg" }
  ];

  // Shop By Category Grid Data
  const shopByCategory = [
    { title: "Dry fruits & seeds", discount: "Up to 50% off", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/Grocery_SBC_02.jpg" },
    { title: "Oil & ghee", discount: "Up to 45% off", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/Grocery_SBC_03.jpg" },
    { title: "Oats & muesli", discount: "Up to 60% off", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_SBC_04.jpg" },
    { title: "Spreads & honey", discount: "Up to 50% off", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_SBC_06.jpg" },
    { title: "Tea & coffee", discount: "Up to 40% off", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_SBC_07.jpg" },
    { title: "Sweets", discount: "Up to 30% off", img: "https://m.media-amazon.com/images/G/31/img26/Consumables/grocery/Jupiter26/p3/Grocery_SBC_09.jpg" }
  ];

  return (
    <div className="grocery-store-container">

      {/* Top Circular Categories Slider */}
      <div className="grocery-top-circles">
        {topCategories.map((cat, idx) => (
          <div className="circle-item" key={idx}>
            <div className="circle-img-box">
              <img src={cat.img} alt={cat.title} />
            </div>
            <span>{cat.title}</span>
          </div>
        ))}
      </div>

      {/* Main Banner Slider Area */}
      <div className="grocery-main-banner">
        <div className="banner-content-box">
          <span className="badge-last-chance">Last Chance Deals</span>
          <h2>Up to 70% off</h2>
          <p>Food & beverages</p>
        </div>
      </div>

      {/* Bank Offer Banner */}
      <div className="grocery-bank-strip">
        <div className="bank-logo-title">
          <span className="hdfc-tag">HDFC BANK</span>
          <span className="festive-tag">FESTIVE TREATS</span>
        </div>
        <div className="bank-offer-desc">
          <strong>10% Instant Discount*</strong> up to ₹22,000 off on Credit Card and Credit Card EMI
        </div>
      </div>

      {/* Prime Offer Banner */}
      <div className="grocery-prime-strip">
        <span>Get extra <strong>5% off</strong> on lakhs of products</span>
        <button className="join-prime-btn">Join Prime at ₹99/3 months</button>
      </div>

      {/* Main Layout (Sidebar Filters + Products Grid) */}
      <div className="grocery-layout-body">

        {/* Left Filter Sidebar */}
        <div className="grocery-sidebar">
          <h5>Category</h5>
          <ul className="sidebar-list">
            <li>Grocery & Gourmet Foods</li>
            <li className="sub-item">Bakery</li>
            <li className="sub-item">Breakfast Cereal</li>
            <li className="sub-item">Coffee, Tea & Beverages</li>
            <li className="sub-item">Cooking & Baking Supplies</li>
            <li className="sub-item">Jams, Honey & Spreads</li>
            <li className="sub-item">Meat, Poultry & Seafood</li>
          </ul>

          <h5 className="mt-3">Amazon Prime</h5>
          <label><input type="checkbox" /> Prime</label>

          <h5 className="mt-3">Customer Reviews</h5>
          <label>⭐⭐⭐⭐⭐ & Up</label>

          <h5 className="mt-3">Price</h5>
          <div className="price-filters">
            <span>Under ₹100</span>
            <span>₹100 - ₹200</span>
            <span>₹200 - ₹500</span>
            <span>Over ₹1,000</span>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="grocery-content">

          {/* Top Deals Section */}
          <div className="section-card-box">
            <div className="section-header-row">
              <h3>Top deals</h3>
              <a href="#">Explore more</a>
            </div>
            <div className="deals-horizontal-row">
              <div className="deal-item-card">
                <img src="https://m.media-amazon.com/images/I/91Vfaow3+dL._AC_UF480,480_SR480,480_.jpg" alt="Deal" />
                <p>Phool 10 Item Shubh Diwali Popap...</p>
                <div className="deal-price">₹445<sup>00</sup> <span className="mrp">M.R.P: <s>₹675.00</s></span></div>
              </div>
              <div className="deal-item-card">
                <img src="https://m.media-amazon.com/images/I/81pRbLlMBFL._AC_UF480,480_SR480,480_.jpg" alt="Deal" />
                <p>NutriSnacksBox Golden White 12...</p>
                <div className="deal-price">₹899<sup>00</sup> <span className="mrp">M.R.P: <s>₹2,999.00</s></span></div>
              </div>
              <div className="deal-item-card">
                <img src="https://m.media-amazon.com/images/I/71UvCMUep5L._AC_UF480,480_SR480,480_.jpg" alt="Deal" />
                <p>Ferrero Rocher Golden Diya Gift Pack</p>
                <div className="deal-price">₹899<sup>00</sup> <span className="mrp">M.R.P: <s>₹1,499.00</s></span></div>
              </div>
            </div>
          </div>

          {/* Gifting Special Section */}
          <div className="section-card-box mt-4">
            <div className="section-header-row">
              <h3>Gifting special</h3>
            </div>
            <div className="gifting-grid">
              {giftingCategories.map((gift, idx) => (
                <div className="gift-card-item" key={idx}>
                  <img src={gift.img} alt={gift.title} />
                  <span>{gift.title}</span>
                </div>
              ))}
              <div className="explore-store-box">
                <button>Explore store &gt;</button>
              </div>
            </div>
          </div>

          {/* Shop By Category Section */}
          <div className="section-card-box mt-4">
            <div className="section-header-row">
              <h3>Shop by category</h3>
            </div>
            <div className="shop-by-cat-grid">
              {shopByCategory.map((item, idx) => (
                <div className="cat-grid-card" key={idx}>
                  <img src={item.img} alt={item.title} />
                  <div className="cat-badge">{item.discount}</div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}