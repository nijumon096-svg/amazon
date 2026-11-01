import React from "react";
import "./ElectronicsDeals.css";

export default function ElectronicsDeals() {
    // ഇലക്ട്രോണിക്സ് പ്രൊഡക്റ്റ് ഡാറ്റ
    const products = [
        {
            id: 1,
            title: "OnePlus Pad Lite, 11-inch (27.94 CM)...",
            price: "22,499",
            mrp: "29,999",
            discount: "25% off",
            rating: "4.3",
            reviews: "1,043",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/410wBzFVMsL.AC_SX250.jpg"
        },
        {
            id: 2,
            title: "Amazfit Active Max (Smartwatch) 5...",
            price: "13,499",
            mrp: "24,999",
            discount: "53% off",
            rating: "4.5",
            reviews: "2,431",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/61eLhGc40TL.AC_SX500.jpg"
        },
        {
            id: 3,
            title: "Sonos Play: Portable Speaker with...",
            price: "31,679",
            mrp: "35,999",
            discount: "12% off",
            rating: "4.2",
            reviews: "14",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/61wzyWfA3QL.AC_SX500.jpg"
        },
        {
            id: 4,
            title: "HP Omnibook 3 Smartchoice Intel...",
            price: "1,35,990",
            mrp: "1,80,000",
            discount: "25% off",
            rating: "4.4",
            reviews: "56",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/61USFTWoQRL.AC_SX500.jpg"
        },
        {
            id: 5,
            title: "Sony New Alpha ILCE-6100X APS-C...",
            price: "74,990",
            mrp: "89,990",
            discount: "17% off",
            rating: "4.6",
            reviews: "734",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/71SsP7PGEVL.AC_SX500.jpg"
        },
        {
            id: 6,
            title: "Logitech MX Master 3S Bluetooth...",
            price: "4,999",
            mrp: "10,995",
            discount: "55% off",
            rating: "4.7",
            reviews: "489",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/61CSiQeX+pL.AC_SX500.jpg"
        },
        {
            id: 7,
            title: "HP Chromebook 14, MediaTek...",
            price: "22,990",
            mrp: "29,990",
            discount: "23% off",
            rating: "4.1",
            reviews: "34",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/71MdmsrpaFL.AC_SX500.jpg"
        },
        {
            id: 8,
            title: "Samsung 27 Odyssey QD-OLED G5...",
            price: "39,999",
            mrp: "49,999",
            discount: "20% off",
            rating: "4.3",
            reviews: "75",
            tag: "Limited time deal",
            img: "https://m.media-amazon.com/images/I/61bjbIkBw4L.AC_SX500.jpg"
        }
    ];

    return (
        <div className="ed-container">

            {/* Top Navbar Categories */}
            <div className="ed-top-nav">
                <span>Electronics Accessories</span>
                <span>Laptops & Accessories</span>
                <span>TV & Home Entertainment</span>
                <span>Audio</span>
                <span>Cameras</span>
                <span>Computer Peripherals</span>
                <span>Smart Technology</span>
                <span>Musical Instruments</span>
            </div>

            {/* Main Layout (Sidebar + Products Grid) */}
            <div className="ed-main-layout">

                {/* Left Filter Sidebar */}
                <div className="ed-sidebar">
                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Category</h5>
                        <a href="#" className="ed-sub-link">&lt; Electronics</a>
                        <span className="ed-current-cat">Electronics_Top_Deals</span>
                    </div>

                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Amazon Prime</h5>
                        <label><input type="checkbox" /> Prime</label>
                    </div>

                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Customer Reviews</h5>
                        <label>⭐⭐⭐⭐⭐ & Up</label>
                    </div>

                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Item Condition</h5>
                        <label><input type="checkbox" /> New</label>
                    </div>

                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Price</h5>
                        <span className="ed-price-link">Under ₹1,000</span>
                    </div>

                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Deals & Discounts</h5>
                        <label><input type="checkbox" /> Great Indian Festival</label>
                    </div>

                    <div className="ed-filter-group">
                        <h5 className="ed-filter-title">Discount</h5>
                        <label><input type="checkbox" /> 10% Off or more</label>
                        <label><input type="checkbox" /> 25% Off or more</label>
                        <label><input type="checkbox" /> 35% Off or more</label>
                        <label><input type="checkbox" /> 50% Off or more</label>
                    </div>
                </div>

                {/* Right Products Content Area */}
                <div className="ed-content-area">
                    <h2 className="ed-section-heading">Super 50 Weekend Deals</h2>

                    <div className="ed-products-grid">
                        {products.map((item) => (
                            <div className="ed-product-card" key={item.id}>
                                <div className="ed-img-box">
                                    {item.id === 1 ? (
                                        <a href="./ProductDetail">
                                            <img src={item.img} alt={item.title} />
                                        </a>
                                    ) : (
                                        <img src={item.img} alt={item.title} />
                                    )}
                                </div>
                                <div className="ed-product-details">
                                    <p className="ed-product-title">{item.title}</p>
                                    <div className="ed-rating-row">
                                        <span className="stars">★★★★☆</span>
                                        <span className="review-num">{item.reviews}</span>
                                    </div>
                                    <div className="ed-deal-badge">{item.tag}</div>
                                    <div className="ed-pricing-row">
                                        <span className="currency">₹</span>
                                        <span className="price-val">{item.price}</span>
                                        <span className="mrp-val">M.R.P: <s>₹{item.mrp}</s></span>
                                        <span className="disc-val">({item.discount})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
}