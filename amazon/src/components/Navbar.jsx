import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import USLocationModal from "./USLocationModal";// ലൊക്കേഷൻ മോഡൽ കമ്പോണന്റ് ഇംപോർട്ട് ചെയ്യുന്നു
import './Navbar.css';

export default function Navbar() {
  const navigateee = useNavigate();

  // ഒപ്ഷൻ മാറ്റുമ്പോൾ വർക്ക് ചെയ്യുന്ന ഫങ്ഷൻ
  const handleCategoryChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path); // സെലക്ട് ചെയ്യുന്ന വാല്യൂ അനുസരിച്ച് ആ പേജിലേക്ക് പോകും
    }
  };

  const navigatee = useNavigate();

  // Bestsellers പേജിലേക്ക് പോയി മോഡൽ ക്ലോസ് ചെയ്യാൻ
  const handleBestsellersClick = () => {
    // 1. Bootstrap Offcanvas മാട്രിക്സ് ഉപയോഗിച്ച് ക്ലോസ് ചെയ്യുക
    const offcanvasElement = document.getElementById("amazonSidebar");
    if (offcanvasElement) {
      // Bootstrap-ന്റെ ഇൻസ്റ്റൻസ് വഴി ഓഫ്കാൻവാസ് ഹൈഡ് ചെയ്യുക
      const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      } else {
        // ഒരുവേള ഇൻസ്റ്റൻസ് ഇല്ലെങ്കിൽ നേരിട്ട് ക്ലാസുകളും ബാക്ക്ഡ്രോപ്പും റിമൂവ് ചെയ്യുക
        offcanvasElement.classList.remove("show");
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) backdrop.remove();
        document.body.classList.remove("offcanvas-open");
        document.body.style.overflow = "";
      }
    }

    // 2. പേജിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക
    navigate("/bestsellers");
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [currentLang, setCurrentLang] = useState("EN");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false); // മോഡൽ കൺട്രോൾ ചെയ്യാൻ സ്റ്റേറ്റ്
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div>
      {/* main bar */}
      <nav className="navbar navbar-dark bg-dark px-2 py-2">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap gap-2">

          {/* Logo */}
          {/* Logo */}
          <Link className="colum navbar-brand d-flex align-items-center m-0" to="/" style={{ padding: "5px 10px", cursor: "pointer" }}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon.in"
              style={{ width: "100px", objectFit: "contain", marginTop: "5px" }}
            />
          </Link>

          {/* Location / Deliver to India Clickable Section */}
          {/* Location / Deliver to Section with Icon */}
          <div
            className="colum d-none d-lg-flex align-items-center text-nowrap mx-2"
            style={{ fontSize: "11px", lineHeight: "1.2", padding: "6px 8px", cursor: "pointer" }}
            onClick={() => setIsLocationModalOpen(true)}
          >
            {/* Location Pin SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="20"
              fill="white"
              className="bi bi-geo-alt me-1"
              viewBox="0 0 16 16"
              style={{ marginTop: "3px" }}
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>

            <div className="d-flex flex-column justify-content-center">
              <span style={{ fontSize: "10px", color: "#cccccc" }}>Deliver to</span>
              <span className="fw-bold text-white" style={{ fontSize: "13px" }}>Kochi 682507</span>
            </div>
          </div>
          <form className="custom-amazon-search" onSubmit={(e) => e.preventDefault()}>
            <select className="search-dropdown-btn" onChange={handleCategoryChange}>
              <option value="/">All</option>
              <option value="./freshmeat">Fresh Meat</option>
              <option value="./Mobiles">Mobiles</option>
              <option value="./TodaysDeals"> Todays Deals</option>
              <option value="./GroceryStore">GroceryStore</option>


            </select>

            <input
              type="text"
              className="search-input-box"
              placeholder="Search Amazon.in"
            />

            <button type="submit" className="search-submit-btn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                alt="Search"
                style={{ width: "18px", height: "18px", objectFit: "contain" }}
              />
            </button>
          </form>
          {/* വലതുവശത്തെ ലിങ്കുകൾ */}
          <div className="d-flex align-items-center text-white gap-2 text-nowrap order-2 order-lg-3">

            {/* ലാംഗ്വേജ് ഡ്രോപ്പ്ഡൗൺ */}
            {/* Language Dropdown */}
            <div className="dropdown">
              <a className="btn btn-sm text-white dropdown-toggle text-decoration-none px-2 py-1 d-flex align-items-center gap-1" href="#" role="button" data-bs-toggle="dropdown" style={{ fontSize: "13px", backgroundColor: "transparent", border: "1px solid transparent" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="US Flag"
                  style={{ width: "20px", height: "14px", objectFit: "cover" }}
                />
                <span className="fw-bold">{currentLang}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow p-3" style={{ minWidth: "250px", color: "#000000", fontSize: "13px" }}>
                <div className="fw-bold mb-2 pb-1 border-bottom d-flex justify-content-between align-items-center">
                  <span>Change Language</span>
                  <a href="#" className="text-decoration-none" style={{ fontSize: "11px", color: "#007185" }}>Learn more</a>
                </div>

                <div className="d-flex flex-column gap-2">
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("EN")}>
                    <input type="radio" name="lang" checked={currentLang === "EN"} readOnly /> English - EN
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("HI")}>
                    <input type="radio" name="lang" checked={currentLang === "HI"} readOnly /> हिन्दी - HI
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("TA")}>
                    <input type="radio" name="lang" checked={currentLang === "TA"} readOnly /> தமிழ் - TA
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("TE")}>
                    <input type="radio" name="lang" checked={currentLang === "TE"} readOnly /> తెలుగు - TE
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("KN")}>
                    <input type="radio" name="lang" checked={currentLang === "KN"} readOnly /> ಕನ್ನಡ - KN
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("ML")}>
                    <input type="radio" name="lang" checked={currentLang === "ML"} readOnly /> മലയാളം - ML
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setCurrentLang("BN")}>
                    <input type="radio" name="lang" checked={currentLang === "BN"} readOnly /> বাংলা - BN
                  </label>
                </div>
              </ul>
            </div>
            {/* Hello, sign in - Account & Lists */}
            <div className="colum " style={{ padding: "10px", cursor: "pointer" }}>
              <a
                className="d-flex flex-column justify-content-center text-decoration-none border-0 bg-transparent p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "11px", lineHeight: "1.2", textDecoration: "none" }}
              >
                <span style={{ fontSize: "10px", color: "#ffffff" }}>Hello, sign in</span>
                <span className="fw-bold" style={{ fontSize: "11px", color: "#ffffff" }}>Account & Lists</span>
              </a>

              {/* Complete Sign-in & Lists Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-end p-4 shadow-lg bg-white text-dark" style={{ width: "460px", maxWidth: "95vw", borderRadius: "4px", border: "1px solid #d5d9d9" }}>

                {/* Top Yellow Sign-in Button */}
                <div className="text-center mb-3 border-bottom pb-3">
                  <Link
                    to="/login"
                    className="btn btn-warning btn-sm w-75 fw-bold shadow-sm py-2"
                    style={{ backgroundColor: "#ffd814", borderColor: "#fcd200", borderRadius: "8px", fontSize: "14px" }}
                  >
                    Sign in
                  </Link>
                  <div className="mt-2" style={{ fontSize: "12px" }}>
                    New customer? <a href="#" className="text-primary text-decoration-none">Start here.</a>
                  </div>
                </div>

                {/* Two-Column Links Section */}
                <div className="row" style={{ fontSize: "13px" }}>
                  {/* Your Lists */}
                  <div className="col-6 border-end pe-3">
                    <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "15px" }}>Your Lists</h6>
                    <ul className="list-unstyled mb-0" style={{ lineHeight: "2" }}>
                      <li className="colum">
                        <Link to="/CreateaWishList" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Create a Wish List
                        </Link>
                      </li>

                      <li><a href="#" className="menu-link">Wish from Any Website</a></li>
                       <li className="colum">
                        <Link to="/BabyWishlist" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Baby Wishlist
                        </Link>
                      </li>
                      
                      <li><a href="#" className="menu-link">Discover Your Style</a></li>
                      <li><a href="#" className="menu-link">Explore Showroom</a></li>
                    </ul>
                  </div>

                  {/* Your Account */}
                  <div className="col-6 ps-3">
                    <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "15px" }}>Your Account</h6>
                    <ul className="list-unstyled mb-0" style={{ lineHeight: "2" }}>
                      <li className="colum">
                        <Link to="/YourAccount" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Your Account
                        </Link>
                      </li>
                      <li className="colum">
                        <Link to="/Login" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Your Wish List
                        </Link>
                      </li>

                      <li className="colum">
                        <Link to="/YourOrders" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Your Orders
                        </Link>
                      </li>

                      <li className="colum">
                        <Link to="/KeepShopping" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Keep shopping for
                        </Link>
                      </li>

                      <li className="colum">
                        <Link to="/YourRecommendations" className="nav-link text-dark py-1 px-2 text-decoration-none">
                          Your Recommendations
                        </Link>
                      </li>

                      <li><a href="#" className="menu-link">Your Prime Membership</a></li>
                      <li><a href="#" className="menu-link">Your Prime Video</a></li>
                      <li><a href="#" className="menu-link">Your Subscribe & Save Items</a></li>
                      <li><a href="#" className="menu-link">Memberships & Subscriptions</a></li>
                      <li><a href="#" className="menu-link">Your Seller Account</a></li>
                      <li><a href="#" className="menu-link">Manage Your Content and Devices</a></li>
                      <li><a href="#" className="menu-link">Your Music Library</a></li>
                      <li><a href="#" className="menu-link">Register for a free Business Account</a></li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>

            {/* Returns */}
            <Link to='/YourOrders' className="colum d-none d-md-flex flex-column justify-content-center text-decoration-none" style={{ fontSize: "11px", lineHeight: "1.2", padding: "10px", cursor: "pointer" }}>
              <span style={{ fontSize: "10px", color: "#ffffff" }}>Returns</span>
              <span className="fw-bold text-white" style={{ fontSize: "11px", color: "#ffffff" }}>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to='/cart' className="colum d-flex align-items-center text-warning fw-bold text-decoration-none">
              <span style={{ fontSize: "13px", padding: "10px", cursor: "pointer" }}>🛒 Cart</span>
            </Link>
          </div>

        </div>
      </nav>

      {/* menu bar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-1" style={{ backgroundColor: "#232f3e" }}>
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#secondNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="secondNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1 align-items-center" style={{ fontSize: "14px" }}>

              {/* ☰ All Button */}
              <li className="nav-item">
                <button
                  className="btn text-white fw-bold py-1 px-2 border-0 bg-transparent d-flex align-items-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#amazonSidebar"
                  aria-controls="amazonSidebar"
                >
                  ☰ All
                </button>
              </li>

              <li className="colum">
                <Link to="/freshmeat" className="nav-link text-white py-1 px-2 text-decoration-none">
                  Fresh Meat
                </Link>
              </li>
              <li className="colum">
                <Link to="/Mobiles" className="nav-link text-white py-1 px-2 text-decoration-none">
                  Mobiles
                </Link>
              </li>
              <li className="colum">
                <Link to="/TodaysDeals" className="nav-link text-white py-1 px-2 text-decoration-none">
                  Today's Deals
                </Link>
              </li>
              <li className="colum">
                <Link to="/GroceryStore" className="nav-link text-white py-1 px-2 text-decoration-none">
                  Grocery & Gourmet Foods
                </Link>
              </li>

              <li className="colum">
                <Link to="/GroupPayment" className="nav-link text-white py-1 px-2 text-decoration-none">
                  GroupPayment
                </Link>
              </li>
            </ul>

            <div className="d-none d-xl-block text-white fw-bold" style={{ fontSize: "14px" }}>
              <span className="text-warning">Great Indian Festival</span> | Live Now &gt;
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {/* 3. Amazon Style Left Sidebar with Links & Auto-Close */}
      <div
        className="offcanvas offcanvas-start bg-white text-dark shadow-lg"
        tabIndex="-1"
        id="amazonSidebar"
        aria-labelledby="amazonSidebarLabel"
        style={{ width: "360px" }}
      >
        <div className="offcanvas-header text-white px-4 py-3" style={{ backgroundColor: "#232f3e" }}>
          <h5 className="offcanvas-title fw-bold fs-5 m-0" id="amazonSidebarLabel">
            👤 Hello, Muhsin
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white shadow-none position-absolute"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ right: "-45px", top: "15px", backgroundColor: "#fff", opacity: "1", borderRadius: "50%", padding: "10px" }}
          ></button>
        </div>

        <div
          className="container mt-2 pb-5"
          style={{ height: "calc(100vh - 70px)", overflowY: "auto", overflowX: "hidden" }}
        >
          {/* Trending Section */}
          <div className="p-2 border-bottom">
            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "16px" }}>Trending</h6>
            <ul className="list-unstyled mb-0" style={{ fontSize: "14px", lineHeight: "2.2" }}>
              <li className="border-bottom py-1">
                <span
                  onClick={handleBestsellersClick}
                  className="text-secondary text-decoration-none d-block w-100"
                  style={{ cursor: "pointer" }}
                >
                  Bestsellers
                </span>
              </li>
              <li className="py-2 text-secondary cursor-pointer">New Releases</li>
            </ul>
          </div>

          {/* Digital Content and Devices */}
          <div className="p-2 border-bottom">
            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "16px" }}>Digital Content and Devices</h6>
            <ul className="list-unstyled mb-0" style={{ fontSize: "14px", lineHeight: "2.2" }}>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Echo & Alexa
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Fire TV
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Kindle E-Readers & eBooks
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Audible Audiobooks
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Amazon Prime Video
                </Link>
              </li>
              <li className="py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Amazon Music
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop by Category */}
          <div className="p-2">
            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "16px" }}>Shop by Category</h6>
            <ul className="list-unstyled mb-0" style={{ fontSize: "14px", lineHeight: "2.2" }}>
              <li className="border-bottom py-1">
                <Link to="/Mobiles" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Mobiles, Computers
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  TV, Appliances, Electronics
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Men's Fashion
                </Link>
              </li>
              <li className="border-bottom py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Women's Fashion
                </Link>
              </li>
              <li className="py-1">
                <Link to="/ProductCard" className="text-secondary text-decoration-none d-block" data-bs-dismiss="offcanvas">
                  Home, Kitchen, Pets
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Location Modal Component രെൻഡർ ചെയ്യുന്നു */}
      <USLocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />

    </div>
  );
}