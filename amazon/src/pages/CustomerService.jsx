import React, { useState } from "react";
import "./CustomerService.css";

function CustomerService() {
  const [activeTab, setActiveTab] = useState("orders");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="cs-container">
      {/* Top Hero Section */}
      <div className="cs-hero">
        <div className="cs-hero-top">
          <h1></h1>
          <div className="cs-search-wrapper">
            <span className="cs-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search our help content"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <p className="cs-subtitle">Thanks for being an Amazon customer.</p>
      </div>

      {/* Main Content Layout */}
      <div className="cs-main-grid">
        {/* Left Sidebar: Quick Answers */}
        <div className="cs-sidebar">
          <h3>Need a quick answer on something?</h3>
          <p className="cs-sidebar-desc">Read these articles for more customer support.</p>
          
          <div className="cs-dropdown-box">
            <span>Recommended topics</span>
            <span>▼</span>
          </div>

          <div className="cs-quick-card">
            <h4>Track your package</h4>
            <p>Track your packages on Your Orders</p>
          </div>

          <div className="cs-quick-card">
            <h4>Know about shipping speeds and charges</h4>
            <p>Learn more about the shipping speeds and delivery timelines</p>
          </div>

          <div className="cs-quick-card">
            <h4>Return items you ordered</h4>
            <p>Return your orders using our Online Returns Center</p>
          </div>

          <div className="cs-quick-card">
            <h4>Return and Replacement related queries</h4>
            <p>Return and Replacement FAQs</p>
          </div>

          <div className="cs-quick-card">
            <h4>Check Status of a return</h4>
            <p>Track your return in Your Orders</p>
          </div>

          <div className="cs-quick-card">
            <h4>Check Status of your refund</h4>
            <p>Track your refund in Your Refunds</p>
          </div>

          <div className="cs-quick-card">
            <h4>Amazon Pay Later</h4>
            <p>Know more about Amazon Pay Later</p>
          </div>

          <div className="cs-show-more">
            Show more <span>▼</span>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="cs-content-area">
          <div className="cs-question-box">
            <h2>What brings you here today?</h2>
            <p>You can choose an item or filter by category.</p>

            {/* Category Tabs */}
            <div className="cs-tabs">
              <span
                className={`cs-tab ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => setActiveTab("orders")}
              >
                Orders
              </span>
              <span
                className={`cs-tab ${activeTab === "transactions" ? "active" : ""}`}
                onClick={() => setActiveTab("transactions")}
              >
                Transactions on other apps
              </span>
              <span
                className={`cs-tab ${activeTab === "subscriptions" ? "active" : ""}`}
                onClick={() => setActiveTab("subscriptions")}
              >
                Subscriptions
              </span>
              <span
                className={`cs-tab ${activeTab === "devices" ? "active" : ""}`}
                onClick={() => setActiveTab("devices")}
              >
                Amazon devices
              </span>
              <span
                className={`cs-tab ${activeTab === "digital" ? "active" : ""}`}
                onClick={() => setActiveTab("digital")}
              >
                Digital content
              </span>
            </div>

            {/* Tab Body */}
            {activeTab === "orders" && (
              <div className="cs-tab-content">
                <p>You haven’t placed any orders yet.</p>
                <button className="cs-start-shopping-btn">Start Shopping</button>
              </div>
            )}

            {activeTab !== "orders" && (
              <div className="cs-tab-content">
                <p>No activity found in this category.</p>
              </div>
            )}

            <div className="cs-load-more">
              Load more <span>&gt;</span>
            </div>
          </div>

          {/* Common Issues Box */}
          <div className="cs-common-issues">
            <h2>Can’t find what you’re looking for?</h2>
            <p>We can also solve these common issues.</p>
            <div className="cs-issue-card">
              <span className="cs-prime-logo">prime</span>
              <span className="cs-issue-title">Managing Prime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Navbar */}
      <div className="cs-footer-bar">
        <div className="cs-footer-left">
          <span className="cs-footer-brand">amazon customer service</span>
          <span className="cs-footer-link">Home</span>
          <span className="cs-footer-link">Digital Services and Device Support</span>
        </div>
        <div className="cs-footer-search">
          <input type="text" placeholder="Search our help content" />
        </div>
      </div>
    </div>
  );
}

export default CustomerService;