import React from "react";
import { Link } from "react-router-dom"; 

export default function TrendingDealsCard() {
  return (
    <div className="card amazon-gradient-card p-3 shadow-sm border-0 rounded-4" style={{ width: "100%", maxWidth: "350px" }}>
      
      {/* Heading & Arrow Link to another page */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold m-0 text-dark" style={{ fontSize: "22px" }}>
          Trending deals
        </h3>
        <Link 
          to="/deals" 
          className="text-dark text-decoration-none fw-bold fs-4 d-flex align-items-center"
          style={{ transition: "transform 0.2s" }}
        >
          &gt;
        </Link>
      </div>

      {/* Cards products grid content... */}
      <div className="row g-2">
        {/* Product items here */}
      </div>

    </div>
  );
}