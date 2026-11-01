import React, { useRef } from "react";

export default function Mobiles() {

  const brandOffers = [
    { name: "Smartphones", img: "https://m.media-amazon.com/images/I/61poC8L0VAL._AC_UY327_QL65_.jpg", offer: "Starting ₹5,999" },
    { name: "Laptops & Tablets", img: "https://m.media-amazon.com/images/I/81ZE76bzvFL._AC_UY327_QL65_.jpg", offer: "Up to 40% off" },
    { name: "Televisions", img: "https://m.media-amazon.com/images/I/71kjAokz-yL._AC_UY327_QL65_.jpg", offer: "No Cost EMI" },
    { name: "Headphones", img: "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_UY327_QL65_.jpg", offer: "Min 50% off" }
  ];

  const mobileProducts = [
    { id: 1, name: "Samsung Galaxy S25 Ultra 5G", price: "₹88,999", mrp: "₹1,24,999", discount: "28%", img: "https://m.media-amazon.com/images/I/71AlmDfE-WL._AC_UY327_QL65_.jpg" },
    { id: 2, name: "OnePlus Nord CE6 5G", price: "₹28,499", mrp: "₹33,999", discount: "16%", img: "https://m.media-amazon.com/images/I/61EC3mmirsL._AC_SX416_CB1169409_QL70_.jpg" },
    { id: 3, name: "Apple iPhone 15 (128 GB)", price: "₹59,999", mrp: "₹79,990", discount: "25%", img: "https://m.media-amazon.com/images/I/61d88xzrklL._AC_UY327_QL65_.jpg" },
    { id: 4, name: "Redmi Note 13 Pro+", price: "₹23,999", mrp: "₹31,999", discount: "25%", img: "https://m.media-amazon.com/images/I/718NxFsqHOL._AC_UY327_QL65_.jpg" },
    { id: 5, name: "Realme Narzo 70 Pro 5G", price: "₹17,999", mrp: "₹23,999", discount: "25%", img: "https://m.media-amazon.com/images/I/81MaNDUdnhL._AC_UY327_QL65_.jpg" }
  ];

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
    <div style={{ backgroundColor: "#eaeded", minHeight: "100vh", fontFamily: "Arial, sans-serif", paddingBottom: "40px" }}>

      {/* 1. Top Banner */}
      <div style={{ backgroundColor: "#ff9900", textAlign: "center" }}>
        <img
          src="https://m.media-amazon.com/images/G/31/img17/AmazonPay/Aditya_Vangala/HDFC-CC_PC_01_P3.jpg"
          alt="Main Banner"
          style={{ width: "100%", maxHeight: "290px", objectFit: "cover" }}
        />
      </div>

      {/* Main Fluid Container for Sidebar + Content */}
      <div className="container-fluid px-4 mt-3">
        <div className="row">

          {/* LEFT SIDEBAR: Filters & Department Lists */}
          <div className="col-lg-2 d-none d-lg-block bg-white p-3 border rounded shadow-sm" style={{ fontSize: "13px", height: "fit-content" }}>
            <h6 className="fw-bold mb-3" style={{ color: "#0f1111", fontSize: "14px" }}>Department</h6>
            <ul className="list-unstyled mb-4" style={{ lineHeight: "2", color: "#007185" }}>
              <li><a href="#" className="text-decoration-none text-dark fw-bold">Mobile Phones</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Smartphones</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Basic Mobiles</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Accessories</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Cases & Covers</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Power Banks</a></li>
              <li className="ps-2"><a href="#" className="text-decoration-none">Tablets</a></li>
            </ul>

            <h6 className="fw-bold mb-2" style={{ color: "#0f1111", fontSize: "14px" }}>Brands</h6>
            <ul className="list-unstyled mb-0" style={{ lineHeight: "1.8", color: "#007185" }}>
              <li><input type="checkbox" className="me-2" /> Samsung</li>
              <li><input type="checkbox" className="me-2" /> OnePlus</li>
              <li><input type="checkbox" className="me-2" /> Apple</li>
              <li><input type="checkbox" className="me-2" /> Redmi</li>
              <li><input type="checkbox" className="me-2" /> Realme</li>
            </ul>
          </div>

          {/* RIGHT SIDE: Main Content Area */}
          <div className="col-lg-10 col-12">

            {/* Mid Banner */}
            <div className="mb-4 text-center">
              <img
                src="https://m.media-amazon.com/images/G/31/img23/Wireless/rohimak/phase3_CLP/The-Final-Price-Crash_1._CB764589369_.gif"
                alt="Mid Banner"
                style={{ width: "100%", height: "330px", objectFit: "cover", borderRadius: "4px" }}
              />
            </div>

            {/* Brand Offers Grid */}
            <div className="bg-white p-4 rounded mb-4 shadow-sm">
              <h4 className="fw-bold mb-3" style={{ fontSize: "20px", color: "#0f1111" }}>
                Grand Opening Deals | Top Brands
              </h4>
              <div className="row g-3">
                {brandOffers.map((item, index) => (
                  <div className="col-6 col-md-3 text-center" key={index}>
                    <div className="p-3 border rounded bg-light cursor-pointer h-100 d-flex flex-column justify-content-between">
                      <img src={item.img} alt={item.name} style={{ height: "120px", objectFit: "contain", marginBottom: "10px" }} />
                      <div>
                        <div className="fw-bold" style={{ fontSize: "14px", color: "#0f1111" }}>{item.name}</div>
                        <div className="text-danger fw-bold" style={{ fontSize: "13px" }}>{item.offer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockbuster Deals Slider Section */}
            <div className="bg-white p-4 rounded mb-4 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold m-0" style={{ fontSize: "18px", color: "#0f1111" }}>
                  Blockbuster Deals on Smartphones
                </h5>
                <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none" }}>See all</a>
              </div>

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
                  {mobileProducts.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        minWidth: "210px", maxWidth: "210px", flex: "0 0 auto", border: "1px solid #eee",
                        borderRadius: "4px", padding: "10px", display: "flex", flexDirection: "column",
                        justifyContent: "space-between", cursor: "pointer", background: "#fff"
                      }}
                    >
                      <div style={{ height: "150px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <img src={item.img} alt={item.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                      </div>

                      <div>
                        <span className="badge bg-danger mb-1" style={{ fontSize: "10px" }}>Great Indian Festival</span>
                        <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {item.name}
                        </a>
                        <div style={{ marginTop: "6px" }}>
                          <span style={{ fontSize: "14px", color: "#CC0C39" }}>-{item.discount}</span> &nbsp;
                          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#0f1111" }}>{item.price}</span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#565959", textDecoration: "line-through" }}>
                          M.R.P: {item.mrp}
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

          </div>

        </div>
      </div>

    </div>
  );
}