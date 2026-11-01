import React, { useState } from "react";
import "./YourOrders.css";

function YourOrders() {
  const [activeTab, setActiveTab] = useState("orders");
  const [timeFilter, setTimeFilter] = useState("past 3 months");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="your-orders-container">
      {/* Breadcrumb Navigation */}
      <div className="yo-breadcrumb">
        <span>Your Account</span> &gt; <span className="yo-current">Your Orders</span>
      </div>

      {/* Header & Search Section */}
      <div className="yo-header-section">
        <h1>Your Orders</h1>
        <div className="yo-search-box">
          <div className="yo-search-input-wrapper">
            <span className="yo-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search all orders"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="yo-search-btn">Search Orders</button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="yo-tabs">
        <button
          className={`yo-tab ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
        <button
          className={`yo-tab ${activeTab === "buyAgain" ? "active" : ""}`}
          onClick={() => setActiveTab("buyAgain")}
        >
          Buy Again
        </button>
        <button
          className={`yo-tab ${activeTab === "notShipped" ? "active" : ""}`}
          onClick={() => setActiveTab("notShipped")}
        >
          Not Yet Shipped
        </button>
      </div>

      {/* Filter & Content Section */}
      {activeTab === "orders" && (
        <div className="yo-content-section">
          <div className="yo-filter-bar">
            <span>0 orders placed in</span>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="past 3 months">past 3 months</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="archive">Archived Orders</option>
            </select>
          </div>

          <div className="yo-empty-message">
            <p>
              Looks like you haven't placed an order in the last 3 months.{" "}
              <span className="yo-link">View orders in 2026</span>
            </p>
          </div>
        </div>
      )}

      {activeTab === "buyAgain" && (
        <div className="yo-content-section">
          <div className="yo-empty-message">
            <p>There are no recommended items to buy again right now.</p>
          </div>
        </div>
      )}

      {activeTab === "notShipped" && (
        <div className="yo-content-section">
          <div className="yo-empty-message">
            <p>You have no pending orders that have not yet been shipped.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default YourOrders;