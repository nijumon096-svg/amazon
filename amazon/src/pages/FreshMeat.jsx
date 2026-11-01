import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FreshMeat.css";
export default function FreshMeat() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, title: "Chicken & Poultry", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "Freshwater Fish", img: "https://m.media-amazon.com/images/I/51J8qnIWi+L._AC_UY327_QL65_.jpg" },
    { id: 3, title: "Marine Fish", img: "https://m.media-amazon.com/images/I/51MnM965-aL._AC_UY327_QL65_.jpg" },
    { id: 4, title: "Ready to Cook", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80" },
    { id: 5, title: "Prawns & Shellfish", img: "https://m.media-amazon.com/images/I/51Ecv-MilxL._AC_UY327_QL65_.jpg" },
    { id: 6, title: "Boneless & Fillets", img: "https://m.media-amazon.com/images/I/61FW9FhDVBL._AC_UY327_QL65_.jpg" },
    { id: 7, title: "Mutton & Lamb", img: "https://m.media-amazon.com/images/I/51+PrkUN+LL._AC_UY327_QL65_.jpg" },
    { id: 8, title: "Dry Fish", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80" },
    { id: 9, title: "Steaks", img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=300&q=80" },
    { id: 10, title: "Cold Cuts", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=300&q=80" },
    { id: 11, title: "Seekh & Tikkas", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80" },
    { id: 12, title: "Pet Friendly", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80" }
  ];
  const freshSections = [
    {
      title: "Prawns & Shellfish",
      products: [
        { id: 1, name: "Freshwater Prawns Medium", price: "₹379.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51M-zNh7IgL._AC_AA360_.jpg" },
        { id: 2, name: "Tiger Prawns Large", price: "₹649.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51LBZbnSPKL._AC_AA360_.jpg" },
        { id: 3, name: "Sea White Prawns", price: "₹499.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51xJAD75kVL._AC_AA360_.jpg" },
        { id: 4, name: "Small Shrimps Cleaned", price: "₹299.00", weight: "250g", img: "https://m.media-amazon.com/images/I/51LBZbnSPKL._AC_AA360_.jpg" },
        { id: 5, name: "Lobster Whole Fresh", price: "₹999.00", weight: "1kg", img: "https://m.media-amazon.com/images/I/51LBZbnSPKL._AC_AA360_.jpg" },
        { id: 6, name: "Crab Medium Cleaned", price: "₹450.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51CHQaRzReL._AC_AA360_.jpg" }
      ]
    },
    {
      title: "Boneless & Fillets",
      products: [
        { id: 7, name: "Chicken Breast Boneless", price: "₹249.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51X2qNihqkL._AC_AA360_.jpg" },
        { id: 8, name: "Basa Fish Fillet", price: "₹349.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51x6SWsd31L._AC_AA360_.jpg" },
        { id: 9, name: "Mutton Boneless Cubes", price: "₹699.00", weight: "500g", img: "https://m.media-amazon.com/images/I/51F0M7jTSlL._AC_AA360_.jpg" },
        { id: 10, name: "Chicken Thigh Boneless", price: "₹279.00", weight: "500g", img: "https://m.media-amazon.com/images/I/61XUDXyYUTL._AC_AA360_.jpg" },
        { id: 11, name: "Seer Fish Boneless Slice", price: "₹799.00", weight: "250g", img: "https://m.media-amazon.com/images/I/71zDCpt5QaL._AC_AA360_.jpg" }
      ]
    }
  ];

  const handleAddToCart = (item) => {
    const productData = {
      ...item,
      qty: 1
    };
    navigate("/cart", { state: { product: productData } });
  };

  return (
    <div style={{ backgroundColor: "#eaeded", minHeight: "100vh", fontFamily: "Arial, sans-serif", paddingBottom: "40px" }}>

      <div style={{ backgroundColor: "#fff", padding: "15px", textAlign: "center", borderBottom: "1px solid #d5d9d9" }}>
        <img
          src="https://m.media-amazon.com/images/G/31/img22/Fresh/Junk/Aug/GW/Hero/PC_Hero_3000x1200._CB600642137_.jpg"
          alt="Fresh Banner"
          style={{ width: "100%", maxHeight: "180px", objectFit: "cover", borderRadius: "4px" }}
        />
      </div>

      <div className="freshmeat-container">
        <h2 className="shop-by-category-title">SHOP BY CATEGORY</h2>

        <div className="fm-category-grid">
          {categories.map((item) => (
            <div className="fm-category-card" key={item.id}>
              <div className="fm-img-circle">
                <img src={item.img} alt={item.title} />
              </div>
              <h4 className="fm-category-name">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1300px", margin: "20px auto", backgroundColor: "#fff", padding: "15px 20px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-success fs-5 px-3 py-2">amazon fresh</span>
          <span style={{ fontSize: "14px", fontWeight: "bold", color: "#0f1111" }}>Delivery in 2 hours &nbsp;|&nbsp; Super savings</span>
        </div>
        <button className="btn btn-warning btn-sm fw-bold px-4" style={{ backgroundColor: "#ffd814", borderColor: "#fcd200" }}>
          Visit the store
        </button>
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {freshSections.map((section, index) => {
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
            <div key={index} style={{ backgroundColor: "#fff", marginBottom: "20px", padding: "20px", borderRadius: "4px" }}>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold m-0" style={{ fontSize: "18px", color: "#0f1111" }}>{section.title}</h5>
                <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none" }}>See all</a>
              </div>

              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>

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
                        minWidth: "190px", maxWidth: "190px", flex: "0 0 auto", border: "1px solid #eee",
                        borderRadius: "4px", padding: "10px", display: "flex", flexDirection: "column",
                        justifyContent: "space-between", cursor: "pointer", background: "#fff"
                      }}
                    >
                      <div style={{ height: "130px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <img src={item.img} alt={item.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                      </div>

                      <div>
                        <div style={{ fontSize: "11px", color: "#565959" }}>{item.weight}</div>
                        <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {item.name}
                        </a>
                        <div style={{ fontSize: "16px", fontWeight: "bold", color: "#0f1111", marginTop: "6px" }}>
                          {item.price}
                        </div>
                        <button
                          className="btn btn-warning btn-sm w-100 mt-2 fw-bold"
                          style={{ backgroundColor: "#ffd814", borderColor: "#fcd200", fontSize: "12px", borderRadius: "20px" }}
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

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
  );
}