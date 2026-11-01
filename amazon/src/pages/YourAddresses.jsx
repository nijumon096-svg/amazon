import React, { useState } from "react";
import "./YourAddresses.css";

function YourAddresses() {
  const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    addressLine: "",
    city: "",
    state: "",
  });

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!newAddress.fullName || !newAddress.pincode || !newAddress.addressLine) {
      alert("ദയവായി ആവശ്യ വിവരങ്ങൾ പൂരിപ്പിക്കുക!");
      return;
    }
    setAddresses([...addresses, newAddress]);
    setNewAddress({ fullName: "", phone: "", pincode: "", addressLine: "", city: "", state: "" });
    setShowModal(false);
  };

  return (
    <div className="addresses-container">
      {/* Breadcrumb */}
      <div className="ya-breadcrumb">
        <span>Your Account</span> &gt; <span className="ya-current">Your Addresses</span>
      </div>

      {/* Header */}
      <h1 className="ya-title">Your Addresses</h1>

      {/* Grid Section */}
      <div className="ya-grid">
        {/* Add Address Card */}
        <div className="ya-card ya-add-card" onClick={() => setShowModal(true)}>
          <div className="ya-add-content">
            <span className="ya-plus-icon">+</span>
            <span className="ya-add-text">Add address</span>
          </div>
        </div>

        {/* Saved Addresses List */}
        {addresses.map((addr, index) => (
          <div className="ya-card ya-saved-card" key={index}>
            <h3>{addr.fullName}</h3>
            <p>{addr.addressLine}</p>
            <p>{addr.city}, {addr.state} - {addr.pincode}</p>
            <p>Phone: {addr.phone}</p>
            <div className="ya-card-actions">
              <span className="ya-action-link">Edit</span> | <span className="ya-action-link">Remove</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Form Popup for Adding Address */}
      {showModal && (
        <div className="ya-modal-overlay">
          <div className="ya-modal">
            <h2>Add a new address</h2>
            <form onSubmit={handleAddAddress}>
              <label>Full name</label>
              <input type="text" name="fullName" value={newAddress.fullName} onChange={handleInputChange} required />

              <label>Phone number</label>
              <input type="text" name="phone" value={newAddress.phone} onChange={handleInputChange} required />

              <label>Pincode</label>
              <input type="text" name="pincode" value={newAddress.pincode} onChange={handleInputChange} required />

              <label>Flat, House no., Building, Company, Apartment</label>
              <input type="text" name="addressLine" value={newAddress.addressLine} onChange={handleInputChange} required />

              <label>Town / City</label>
              <input type="text" name="city" value={newAddress.city} onChange={handleInputChange} required />

              <label>State</label>
              <input type="text" name="state" value={newAddress.state} onChange={handleInputChange} required />

              <div className="ya-modal-buttons">
                <button type="submit" className="ya-submit-btn">Add Address</button>
                <button type="button" className="ya-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default YourAddresses;