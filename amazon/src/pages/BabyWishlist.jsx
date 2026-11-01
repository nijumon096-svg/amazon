import React, { useState } from "react";
import "./BabyWishlist.css";

export default function BabyWishlist() {
  const [searchName, setSearchName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for wishlist: ${searchName}`);
  };

  return (
    <div className="bw-container">
      
      {/* Top Navbar */}
      <div className="bw-navbar">
        <div className="bw-nav-left">
          <span className="bw-logo-text">Baby Wishlist</span>
          <a href="#" className="bw-nav-link active">Home</a>
          <a href="#" className="bw-nav-link">Benefits</a>
          <a href="#" className="bw-nav-link">Shopping guides</a>
          <a href="#" className="bw-nav-link">Find a wishlist</a>
        </div>
        <div className="bw-nav-right">
          <a href="#" className="bw-help-link">Help ❓</a>
        </div>
      </div>

      {/* Hero Section with Collages */}
      <div className="bw-hero-section">
        
        {/* Left Photo Collage */}
        <div className="bw-collage bw-left-collage">
          <img src="https://m.media-amazon.com/images/G/01/baby/registry/coldstart/DesktopHeroForLaunchWithPadding.png" alt="Baby" className="collage-img-1" />
          <div className="collage-sub-group">
            <img src="https://m.media-amazon.com/images/G/01/baby/registry/coldstart/DesktopHeroForLaunchWithPadding.png" alt="Baby Feeding" className="collage-img-2" />
            <img src="https://m.media-amazon.com/images/G/01/baby/registry/coldstart/DesktopHeroForLaunchWithPadding.png" alt="Family" className="collage-img-3" />
          </div>
        </div>

        {/* Center Title & CTA */}
        <div className="bw-hero-center">
          <h1>Baby Wishlist</h1>
          <p>Your one-stop wishlist for all your baby and pregnancy needs.</p>
          <button className="bw-yellow-btn">Create your wishlist</button>
        </div>

        {/* Right Photo Collage */}
        <div className="bw-collage bw-right-collage">
          <div className="collage-sub-group">
            <img src="https://m.media-amazon.com/images/G/01/baby/registry/coldstart/DesktopHeroForLaunchWithPadding.png" alt="Parents" className="collage-img-4" />
            <img src="https://m.media-amazon.com/images/G/01/baby/registry/coldstart/DesktopHeroForLaunchWithPadding.png" alt="Ultrasound" className="collage-img-5" />
          </div>
          <img src="https://m.media-amazon.com/images/G/01/baby/registry/coldstart/DesktopHeroForLaunchWithPadding.png" alt="Baby Car Seat" className="collage-img-6" />
        </div>

      </div>

      {/* Find a Baby Wishlist by name Section */}
      <div className="bw-search-section">
        <form onSubmit={handleSearch} className="bw-search-box-wrapper">
          <span className="bw-search-title">Find a Baby Wishlist by name</span>
          <div className="bw-search-input-group">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button type="submit" className="bw-search-btn">Search</button>
          </div>
        </form>
      </div>

      {/* Ready to get started Section */}
      <div className="bw-started-section">
        <h2>Ready to get started?</h2>
        <p>Build your new life together from Earth's largest selection of baby wishlist gifts.</p>
        <button className="bw-yellow-btn">Create your wishlist</button>
      </div>

    </div>
  );
}