import React from "react";
import { Link } from "react-router-dom";
import "./YourAccount.css";

export default function YourAccount() {
  return (
    <div className="your-account-container">
      <h1 className="account-title">Your Account</h1>

      {/* Top Grid Cards */}
      <div className="top-cards-grid">
        <Link to="/YourOrders" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"
            alt="Your Orders"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Your Orders</h3>
            <p>Track, return, or buy things again</p>
          </div>
        </Link>

        <Link to="/security" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png"
            alt="Login & security"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Login & security</h3>
            <p>Edit login, name, and mobile number</p>
          </div>
        </Link>

        <Link to="/AmazonPrime" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png"
            alt="Prime"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Prime</h3>
            <p>View benefits and payment settings</p>
          </div>
        </Link>

        <Link to="/YourAddresses" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png"
            alt="Your Addresses"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Your Addresses</h3>
            <p>Edit addresses for orders and gifts</p>
          </div>
        </Link>

        <Link to="/AmazonBusiness" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg"
            alt="Your business account"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Your business account</h3>
            <p>Sign up for free to save up to 18% with GST invoice and bulk discounts.</p>
          </div>
        </Link>

        <Link to="/payment" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png"
            alt="Payment options"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Payment options</h3>
            <p>Edit or add payment methods</p>
          </div>
        </Link>

        <Link to="/amazonpay" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png"
            alt="Amazon Pay balance"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Amazon Pay balance</h3>
            <p>Add money to your balance</p>
          </div>
        </Link>

        <Link to="/CustomerService" className="account-card">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png"
            alt="Contact Us"
            className="card-icon"
          />
          <div className="card-content">
            <h3>Contact Us</h3>
            <p>Contact our customer service via phone or chat</p>
          </div>
        </Link>
      </div>

      <hr className="account-divider" />

      {/* Bottom List Sections */}
      <div className="bottom-sections-grid">

        <div className="section-box">
          <h3>Digital content and devices</h3>
          <ul className="section-list">
            <li><a href="#apps">Apps and more</a></li>
            <li><a href="#content">Content and devices</a></li>
            <li><a href="#gifts">Digital gifts you've received</a></li>
            <li><a href="#forum">Digital and device forum</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>Email alerts, messages, and ads</h3>
          <ul className="section-list">
            <li><a href="#ads-pref">Advertising preferences</a></li>
            <li><a href="#comm-pref">Communication preferences</a></li>
            <li><a href="#sms">SMS alert preferences</a></li>
            <li><a href="#msg-centre">Message Centre</a></li>
            <li><a href="#alexa">Alexa shopping notifications</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>More ways to pay</h3>
          <ul className="section-list">
            <li><a href="#default-purchase">Default Purchase Settings</a></li>
            <li><a href="#amazon-pay">Amazon Pay</a></li>
            <li><a href="#coupons">Coupons</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>Ordering and shopping preferences</h3>
          <ul className="section-list">
            <li><a href="#packaging">Leave packaging feedback</a></li>
            <li><a href="#lists">Lists</a></li>
            <li><a href="#saved-ids">Manage saved IDs</a></li>
            <li><a href="#shopping-pref">Your Shopping preferences</a></li>
            <li><a href="#content-pref">Your Content</a></li>
            <li><a href="#language">Language settings</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>Other accounts</h3>
          <ul className="section-list">
            <li><a href="#linking">Account Linking</a></li>
            <li><a href="#seller">Seller account</a></li>
            <li><a href="#aws">Amazon Web Services</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>Shopping programs and rentals</h3>
          <ul className="section-list">
            <li><a href="#family">Manage Your Amazon Family</a></li>
            <li><a href="#subscribe">Subscribe & Save</a></li>
            <li><a href="#kids">Shop the Kids' Store by age</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>Subscriptions</h3>
          <ul className="section-list">
            <li><a href="#email-sub">Email</a></li>
            <li><a href="#memberships">Memberships & Subscriptions</a></li>
          </ul>
        </div>

        <div className="section-box">
          <h3>Manage your data</h3>
          <ul className="section-list">
            <li><a href="#request-data">Request your data</a></li>
            <li><a href="#data-access">Data Access and Requests</a></li>
            <li><a href="#manage-apps">Manage apps and services with data access</a></li>
            <li><a href="#close-account">Close Your Amazon Account</a></li>
            <li><a href="#privacy">Privacy Notice</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}