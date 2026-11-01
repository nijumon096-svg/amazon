import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateaWishList.css";
import { Link } from "react-router-dom";

function CreateaWishList() {
  const navigate = useNavigate();

  const handlClick = () => {
    navigate('/login')
  }
  return (
    <div className="amazon-lists-container">
      {/* Top Tabs */}
      <div className="lists-tabs">
        <span className="tab active">Your Lists</span>
        <span className="tab">Your Friends</span>
      </div>

      {/* Hero Banner Section */}
      <div className="lists-hero">
        <div className="hero-content">
          <h1>Lists</h1>
          <p>for all your shopping needs</p>
          <button onClick={handlClick} className="sign-in-btn">Sign In</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="lists-features">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fa-regular fa-rectangle-list"></i>
            {/* നിങ്ങൾക്ക് ഐക്കണുകൾക്കായി FontAwesome അല്ലെങ്കിൽ സിംപിൾ SVG ഉപയോഗിക്കാം */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007185" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
          </div>
          <div className="feature-text">
            <h3>Save time</h3>
            <p>Add your items and ideas in one convenient location</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007185" strokeWidth="2">
              <path d="M20 12V8H4v4m16 0v8H4v-8m16 0H4m12-4V4H8v4"></path>
            </svg>
          </div>
          <div className="feature-text">
            <h3>Give great gifts</h3>
            <p>Remember your friends' lists and share yours</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007185" strokeWidth="2">
              <path d="M4 19h16M4 15h16M4 11h16M4 7h16"></path>
            </svg>
          </div>
          <div className="feature-text">
            <h3>Check price changes</h3>
            <p>Check when items from your lists drop in price</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateaWishList;