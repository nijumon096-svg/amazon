import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Bestsellers() {
  // വിവിധ കാറ്റഗറികളിലെ പ്രൊഡക്റ്റ് ഡാറ്റ
  const bestsellerSections = [
    {
      title: "Bestsellers in Shoes & Handbags",
      products: [
        { id: 1, name: "Bata Mens Fashion Sandal", price: "₹499.00", rating: "4.0", reviews: "1,250", img: "https://images-eu.ssl-images-amazon.com/images/I/41l8N06xakL._AC_UL675_SR675,480_.jpg" },
        { id: 2, name: "Women's Stylish Handbag", price: "₹899.00", rating: "4.3", reviews: "430", img: "https://images-eu.ssl-images-amazon.com/images/I/71eSmlEhIrL._AC_UL675_SR675,480_.jpg" },
        { id: 3, name: "Casual Walking Shoes", price: "₹1,299.00", rating: "4.2", reviews: "2,100", img: "https://images-eu.ssl-images-amazon.com/images/I/61dgP8XDIoL._AC_UL675_SR675,480_.jpg" },
        { id: 4, name: "Formal Leather Shoes", price: "₹1,999.00", rating: "4.5", reviews: "850", img: "https://images-eu.ssl-images-amazon.com/images/I/61utX8kBDlL._AC_UL675_SR675,480_.jpg" }
      ]
    },
    {
      title: "Bestsellers in Beauty",
      products: [
        { id: 5, name: "Cetaphil Cleanser 250ml", price: "₹919.00", rating: "4.5", reviews: "15,200", img: "https://images-eu.ssl-images-amazon.com/images/I/51JkyI01PKL._AC_UL675_SR675,480_.jpg" },
        { id: 6, name: "Nourishing Face Cream", price: "₹450.00", rating: "4.4", reviews: "3,400", img: "https://images-eu.ssl-images-amazon.com/images/I/4125gF+XmHL._AC_UL675_SR675,480_.jpg" },
        { id: 7, name: "Aloe Vera Gel 500g", price: "₹299.00", rating: "4.6", reviews: "8,900", img: "https://images-eu.ssl-images-amazon.com/images/I/61cT-uFfHOL._AC_UL675_SR675,480_.jpg" },
        { id: 8, name: "Matte Lipstick Combo", price: "₹699.00", rating: "4.2", reviews: "1,500", img: "https://images-eu.ssl-images-amazon.com/images/I/61tiecR+5hL._AC_UL675_SR675,480_.jpg" }
      ]
    },
    {
      title: "Bestsellers in Electronics",
      products: [
        { id: 9, name: "Fast USB-C Wall Charger", price: "₹599.00", rating: "4.4", reviews: "5,400", img: "https://images-eu.ssl-images-amazon.com/images/I/71cRik9djML._AC_UL675_SR675,480_.jpg" },
        { id: 10, name: "Braided Type-C Cable", price: "₹299.00", rating: "4.5", reviews: "12,100", img: "https://images-eu.ssl-images-amazon.com/images/I/61ki4G4AKkL._AC_UL675_SR675,480_.jpg" },
        { id: 11, name: "Wireless Bluetooth Earbuds", price: "₹1,499.00", rating: "4.1", reviews: "3,200", img: "https://images-eu.ssl-images-amazon.com/images/I/71zSI8ZHvgL._AC_UL675_SR675,480_.jpg" },
        { id: 12, name: "In-Ear Wired Earphones", price: "₹399.00", rating: "4.2", reviews: "9,800", img: "https://images-eu.ssl-images-amazon.com/images/I/51sxI5xpalL._AC_UL675_SR675,480_.jpg" }
      ]
    },
    {
      title: "Bestsellers in Home & Kitchen",
      products: [
        { id: 13, name: "Insulated Steel Water Bottle", price: "₹699.00", rating: "4.6", reviews: "4,500", img: "https://images-eu.ssl-images-amazon.com/images/I/512UVkoMMEL._AC_UL675_SR675,480_.jpg" },
        { id: 14, name: "LED Warm Fairy Lights", price: "₹250.00", rating: "4.3", reviews: "7,100", img: "https://images-eu.ssl-images-amazon.com/images/I/61W8xeZTwxL._AC_UL675_SR675,480_.jpg" },
        { id: 15, name: "Non-Stick Cookware Set", price: "₹2,199.00", rating: "4.4", reviews: "2,900", img: "https://images-eu.ssl-images-amazon.com/images/I/51nBTTG3hNL._AC_UL675_SR675,480_.jpg" },
        { id: 16, name: "Microfiber Bed Sheet", price: "₹499.00", rating: "4.2", reviews: "3,600", img: "https://images-eu.ssl-images-amazon.com/images/I/51GGwjwSr0L._AC_UL675_SR675,480_.jpg" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", paddingBottom: "40px" }}>

      {/* Top Breadcrumb/Sub-header links */}
      <div style={{ backgroundColor: "#eaeded", padding: "8px 20px", fontSize: "12px", borderBottom: "1px solid #d5d9d9" }}>
        <span className="fw-bold" style={{ color: "#0f1111" }}>Bestsellers</span>
        <span className="mx-2 text-muted">|</span>
        <a href="#" className="text-decoration-none" style={{ color: "#007185" }}>Hot New Releases</a>
      </div>

      {/* Main Container with Sidebar and Content */}
      <div className="container-fluid px-4 mt-3">
        <div className="row">

          {/* Left Sidebar: Department Filters */}
          <div className="col-lg-2 d-none d-lg-block" style={{ fontSize: "13px", borderRight: "1px solid #eaeded" }}>
            <h6 className="fw-bold mb-2" style={{ color: "#0f1111", fontSize: "14px" }}>Any Department</h6>
            <ul className="list-unstyled mb-3" style={{ lineHeight: "1.8", color: "#007185" }}>
              <li><a href="#" className="text-decoration-none text-dark fw-bold">Amazon Bestsellers</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Baby Products</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Beauty</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Books</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Car & Motorbike</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Clothing & Accessories</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Computers & Accessories</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Electronics</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Garden & Outdoors</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Home & Kitchen</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Jewellery</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Musical Instruments</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Sports, Fitness & Outdoors</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Toys & Games</a></li>
            </ul>
          </div>

          {/* Right Main Content Area: Bestseller Sliders */}
          <div className="col-lg-10 col-12">

            {/* Page Header */}
            <h2 className="fw-bold mb-1" style={{ fontSize: "24px", color: "#0f1111" }}>
              Amazon Bestsellers
            </h2>
            <p style={{ fontSize: "12px", color: "#565959", marginBottom: "25px" }}>
              Our most popular items based on sales. Updated frequently.
            </p>

            {/* Rendering Category Rows */}
            {bestsellerSections.map((section, index) => {
              const sliderRef = useRef(null);

              const handleScroll = (direction) => {
                if (sliderRef.current) {
                  const { scrollLeft, clientWidth } = sliderRef.current;
                  const scrollAmount = clientWidth;
                  sliderRef.current.scrollTo({
                    left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                    behavior: "smooth"
                  });
                }
              };

              return (
                <div key={index} style={{ marginBottom: "35px", borderBottom: "1px solid #eaeded", paddingBottom: "25px" }}>

                  {/* Category Title & See More */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold m-0" style={{ fontSize: "18px", color: "#0f1111" }}>
                      {section.title}
                    </h5>
                    <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none" }}>See More</a>
                  </div>

                  {/* Slider Wrapper with Arrows */}
                  <div style={{ position: "relative", display: "flex", alignItems: "center" }}>

                    {/* Left Arrow */}
                    <button
                      onClick={() => handleScroll("left")}
                      style={{
                        position: "absolute", left: "-20px", zIndex: 10, background: "#fff",
                        border: "1px solid #888", borderRadius: "4px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        width: "35px", height: "70px", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                      }}
                    >
                      &lt;
                    </button>

                    {/* Products Row */}
                    <div
                      ref={sliderRef}
                      style={{
                        display: "flex", gap: "15px", overflowX: "auto", scrollBehavior: "smooth",
                        scrollbarWidth: "none", padding: "5px", width: "100%"
                      }}
                    >
                      {section.products.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            minWidth: "200px", maxWidth: "200px", flex: "0 0 auto", border: "1px solid #eee",
                            borderRadius: "4px", padding: "10px", display: "flex", flexDirection: "column",
                            justifyContent: "space-between", cursor: "pointer", background: "#fff"
                          }}
                        >
                          <div style={{ height: "140px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px", position: "relative" }}>
                            <span style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#cc0c39", color: "#fff", padding: "1px 6px", fontSize: "11px", fontWeight: "bold" }}>
                              #{item.id}
                            </span>
                            <img src={item.img} alt={item.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                          </div>

                          <div>
                            <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                              {item.name}
                            </a>
                            <div style={{ fontSize: "12px", color: "#007185", marginTop: "4px" }}>
                              <span style={{ color: "#ffa41c" }}>★★★★☆</span> <span style={{ color: "#007185" }}>{item.reviews}</span>
                            </div>
                            <div style={{ fontSize: "16px", fontWeight: "bold", color: "#0f1111", marginTop: "4px" }}>
                              {item.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={() => handleScroll("right")}
                      style={{
                        position: "absolute", right: "-20px", zIndex: 10, background: "#fff",
                        border: "1px solid #888", borderRadius: "4px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        width: "35px", height: "70px", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                      }}
                    >
                      &gt;
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>

    </div>
  );
}