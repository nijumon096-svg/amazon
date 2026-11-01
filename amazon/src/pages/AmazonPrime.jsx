import React, { useState } from "react";
import "./AmazonPrime.css";

function AmazonPrime() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What happens if I join a plan and later realize I want other benefits also and want to switch to another plan?",
      answer: "You can upgrade or switch your plan by choosing a different membership option from your account settings."
    },
    {
      question: "How do I buy Prime Video ad-free?",
      answer: "Prime Video ad-free can be added as an add-on or is included in specific higher-tier plans."
    },
    {
      question: "How do I cancel my plan?",
      answer: "You can cancel your Prime membership anytime by visiting 'Manage Prime Membership' in your account."
    },
    {
      question: "How many devices can be used simultaneously on a Prime subscription?",
      answer: "Depending on your plan, it ranges from 1 mobile/TV device up to 5 devices simultaneously."
    },
    {
      question: "Can I turn off/on auto-renewal during the course of my membership?",
      answer: "Yes, you can manage your auto-renewal settings anytime under your Amazon payment settings."
    }
  ];

  return (
    <div className="prime-container">
      {/* Hero / Header Section */}
      <div className="prime-hero">
        <div className="prime-hero-left">
          <h1 className="prime-logo">amazon prime</h1>
          <p>One membership, many benefits.</p>
          <div className="prime-badge-box">
            <span>Become a member today</span>
          </div>
        </div>
        <div className="prime-hero-right">
          <h2>Choose the plan that fits best for you</h2>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="prime-table-wrapper">
        <table className="prime-comparison-table">
          <thead>
            <tr>
              <th>Benefits</th>
              <th>Prime Shopping Edition<br /><span className="price-tag">₹99 / 3 months</span></th>
              <th>Prime<br /><span className="price-tag">₹299 / month</span></th>
              <th>Prime Lite<br /><span className="price-tag">₹799 / year</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prime Delivery (Unlimited FREE Same-Day/One-Day)</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Prime Video (Movies, TV shows, ad-free option)</td>
              <td>❌</td>
              <td>✔ (Mobile, TV, Laptop)</td>
              <td>✔ (Mobile or TV)</td>
            </tr>
            <tr>
              <td>Prime Music (100M songs, ad-free)</td>
              <td>❌</td>
              <td>✔</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Prime Shopping (Extra 5% off, rewards)</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Prime Reading (Free eBooks)</td>
              <td>❌</td>
              <td>✔</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Included with Prime Section */}
      <div className="prime-section-title">
        <h2>Check out what's included with Prime:</h2>
      </div>
      
      <div className="prime-features-grid">
        <div className="prime-feature-card">
          <div className="feature-img-placeholder">📦</div>
          <h3>Fast, free delivery</h3>
          <p>Enjoy Same-Day, One-Day, and Two-Day Delivery on millions of items.</p>
        </div>
        <div className="prime-feature-card">
          <div className="feature-img-placeholder">🎬</div>
          <h3>Popular movies & shows</h3>
          <p>New releases, award-winning Amazon Originals. Watch what you love on your favorite devices.</p>
        </div>
        <div className="prime-feature-card">
          <div className="feature-img-placeholder">🏷️</div>
          <h3>Exclusive deals & savings</h3>
          <p>Enjoy daily deals on thousands of items and access exclusive savings events like Prime Day.</p>
        </div>
      </div>

      {/* More Prime Benefits */}
      <div className="prime-section-title">
        <h2>More Prime benefits</h2>
      </div>
      
      <div className="prime-more-benefits">
        <div className="more-benefit-item">
          <h4>🎵 Prime Music</h4>
          <p>Get the largest catalog of music & top podcasts. Play any artist, album, or playlist on Amazon Music with unlimited skips.</p>
        </div>
        <div className="more-benefit-item">
          <h4>🎮 Amazon Luna</h4>
          <p>Discover and claim PC games.</p>
        </div>
        <div className="more-benefit-item">
          <h4>📖 Prime Reading</h4>
          <p>Read as much as you want from hundreds of eligible ebooks, comics and more for free.</p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="prime-faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-arrow">{openFaq === index ? "▲" : "▼"}</span>
            </div>
            {openFaq === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmazonPrime;