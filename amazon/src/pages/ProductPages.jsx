import React, { useState } from 'react';
import './ProductPages.css';

const ProductPages = () => {
    const [mainImage, setMainImage] = useState('https://m.media-amazon.com/images/I/61bK6n74+tL._AC_SL1500_.jpg');

    const thumbnails = [
        'https://m.media-amazon.com/images/I/61bK6n74+tL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61l9ppv2c5L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/51Q757vSlYL._AC_SL1500_.jpg'
    ];

    return (
        <div className="amazon-clone">
            {/* Top Navigation */}
            <header className="az-navbar">
                <div className="az-logo">Amazon<span>.in</span></div>
                <div className="az-search">
                    <input type="text" placeholder="Search Amazon.in" />
                    <button>🔍</button>
                </div>
                <div className="az-right">
                    <span>Hello, Sign in</span>
                    <strong>Account & Lists</strong>
                </div>
            </header>

            {/* Main Product Section (Top Fold) */}
            <section className="az-top-container">
                <div className="az-img-col">
                    <div className="az-thumbnails">
                        {thumbnails.map((img, idx) => (
                            <img 
                                key={idx} 
                                src={img} 
                                alt="thumb" 
                                onMouseEnter={() => setMainImage(img)}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                    <div className="az-main-img">
                        <img src={mainImage} alt="Main Product" />
                    </div>
                </div>

                <div className="az-info-col">
                    <h1>Apple iPhone 16 Pro (512 GB) - Desert Titanium</h1>
                    <a href="#store" className="az-store-link">Visit the Apple Store</a>
                    <div className="az-rating-row">
                        <span className="stars">★★★★★</span> 
                        <span className="count">2,450 ratings | 100+ answered questions</span>
                    </div>
                    <hr />
                    <div className="az-price-row">
                        <span className="discount">-12%</span>
                        <span className="rs">₹</span>
                        <span className="amount">1,39,900</span>
                    </div>
                    <p className="mrp">M.R.P.: <span className="strike">₹1,59,900</span></p>
                    <p className="inclusive">Inclusive of all taxes</p>

                    <div className="az-highlights">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>BUILT FOR APPLE INTELLIGENCE:</strong> Personal, private, powerful.</li>
                            <li><strong>STUNNING DESIGN:</strong> Grade 5 titanium design with a new desert finish.</li>
                            <li><strong>4K 120 FPS DOLBY VISION:</strong> Cinematic video recording capabilities.</li>
                            <li><strong>A18 PRO CHIP:</strong> Unmatched speed and graphics performance for gaming and apps.</li>
                        </ul>
                    </div>
                </div>

                <div className="az-buy-col">
                    <div className="buy-card">
                        <div className="b-price">₹1,39,900</div>
                        <div className="b-delivery">FREE delivery <strong>Tomorrow, October 26</strong>. Order within 3 hrs.</div>
                        <div className="b-stock">In Stock</div>
                        <button className="btn-cart" onClick={() => alert('Added to Cart!')}>Add to Cart</button>
                        <button className="btn-buy" onClick={() => alert('Proceeding to Checkout!')}>Buy Now</button>
                        <div className="secure">🔒 Secure transaction</div>
                    </div>
                </div>
            </section>

            {/* A+ Content / Banner Section (Like the image scroll) */}
            <section className="az-aplus-section">
                <h2>From the manufacturer</h2>
                <div className="aplus-banner">
                    <div className="banner-text">
                        <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16/iPhone_16_Marketing_Page_Flex_Module_Avail_Amazon_Desktop_1500px__en-IN_01._CB547243914_.jpg" alt="" />

                    </div>
                </div>

                <div className="aplus-grid">
                    <div className="aplus-card">
                        <img src="https://via.placeholder.com/300x200" alt="feature 1" />
                        <h4>Pro Camera System</h4>
                        <p>Capture sharper details with advanced 48MP lenses.</p>
                    </div>
                    <div className="aplus-card">
                        <img src="https://via.placeholder.com/300x200" alt="feature 2" />
                        <h4>All-Day Battery</h4>
                        <p>Up to 27 hours of video playback on Pro models.</p>
                    </div>
                    <div className="aplus-card">
                        <img src="https://via.placeholder.com/300x200" alt="feature 3" />
                        <h4>Action Button</h4>
                        <p>Fast-track to your favorite feature with a single press.</p>
                    </div>
                </div>
            </section>

            {/* Comparison Table Section (Model Comparison from Screenshot) */}
            <section className="az-comparison">
                <h2>Compare with similar items</h2>
                <table className="comp-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th className="highlight-col">This Item</th>
                            <th>iPhone 16</th>
                            <th>iPhone 15 Pro</th>
                            <th>iPhone 14 Pro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            <td className="highlight-col"><strong>₹1,39,900</strong></td>
                            <td>₹79,900</td>
                            <td>₹1,19,900</td>
                            <td>₹99,900</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td className="highlight-col">★★★★★ (2.4K)</td>
                            <td>★★★★☆ (1.1K)</td>
                            <td>★★★★★ (4.5K)</td>
                            <td>★★★★★ (3.2K)</td>
                        </tr>
                        <tr>
                            <td>Display Size</td>
                            <td className="highlight-col"><strong>6.3 inches</strong></td>
                            <td>6.1 inches</td>
                            <td>6.1 inches</td>
                            <td>6.1 inches</td>
                        </tr>
                        <tr>
                            <td>Battery Life</td>
                            <td className="highlight-col"><strong>Up to 27 hrs</strong></td>
                            <td>Up to 22 hrs</td>
                            <td>Up to 23 hrs</td>
                            <td>Up to 23 hrs</td>
                        </tr>
                        <tr>
                            <td>Processor</td>
                            <td className="highlight-col"><strong>A18 Pro chip</strong></td>
                            <td>A18 chip</td>
                            <td>A17 Pro chip</td>
                            <td>A16 Bionic</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ProductPages;