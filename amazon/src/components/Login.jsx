import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (emailOrPhone.trim()) {
      // ഇവിടെ ഒടിപി അല്ലെങ്കിൽ അടുത്ത പാസ്‌വേഡ് പേജിലേക്ക് പോകാൻ കൊടുക്കാം
      alert(`Entered: ${emailOrPhone}`);
    } else {
      alert("Please enter your mobile number or email");
    }
  };

  return (
    <div className="login-page" style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Arial, sans-serif" }}>
      
      {/* മുകളിലെ ആമസോൺ ലോഗോ */}
      <div className="py-3 text-center">
        <Link to="/" className="text-decoration-none">
          <h2 className="fw-bold m-0" style={{ color: "#111", letterSpacing: "-1px" }}>
            amazon<span style={{ fontSize: "14px", verticalAlign: "top" }}>.in</span>
          </h2>
        </Link>
      </div>

      {/* ലോഗിൻ ബോക്സ് */}
      <div className="login-card"
        style={{
          width: "350px",
          padding: "20px 26px",
          border: "1px solid #d5d9d9",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "400", marginBottom: "20px", color: "#0f1111" }}>
          Sign in or create account
        </h2>

        <form onSubmit={handleContinue}>
          <label style={{ fontSize: "13px", fontWeight: "700", color: "#0f1111", display: "block", marginBottom: "5px" }}>
            Enter mobile number or email
          </label>
          
          <input
            type="text"
            className="form-control mb-3 shadow-none"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={{
              borderColor: "#888c8c",
              borderRadius: "4px",
              height: "31px",
              fontSize: "14px",
              padding: "3px 7px"
            }}
          />

          <button
            type="submit"
            className="btn w-100 fw-bold shadow-sm"
            style={{
              backgroundColor: "#ffd814",
              borderColor: "#fcd200",
              borderRadius: "8px",
              fontSize: "13px",
              height: "31px",
              padding: "0",
              lineHeight: "31px"
            }}
          >
            Continue
          </button>
        </form>

        <div style={{ fontSize: "12px", color: "#565959", marginTop: "18px", lineHeight: "1.4" }}>
          By continuing, you agree to Amazon's <span style={{ color: "#007185", cursor: "pointer" }}>Conditions of Use</span> and <span style={{ color: "#007185", cursor: "pointer" }}>Privacy Notice</span>.
        </div>

        <div style={{ marginTop: "22px", borderTop: "1px solid #e7e7e7", paddingTop: "15px" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f1111" }}>Buying for work?</div>
          <a href="#" style={{ fontSize: "13px", color: "#007185", textDecoration: "none" }}>
            Create a free business account
          </a>
        </div>
      </div>

      {/* താഴെയുള്ള ഫൂട്ടർ ഭാഗം */}
      <div 
        style={{
          marginTop: "auto",
          width: "100%",
          borderTop: "1px solid #e7e7e7",
          padding: "20px 0",
          textAlign: "center",
          fontSize: "12px",
          color: "#565959",
          backgroundColor: "#f7f7f7"
        }}
      >
        <div className="d-flex justify-content-center gap-4 mb-2" style={{ fontSize: "11px" }}>
          <a href="#" className="text-decoration-none" style={{ color: "#0066c0" }}>Conditions of Use</a>
          <a href="#" className="text-decoration-none" style={{ color: "#0066c0" }}>Privacy Notice</a>
          <a href="#" className="text-decoration-none" style={{ color: "#0066c0" }}>Help</a>
        </div>
        <div>© 1996-2026, Amazon.com, Inc. or its affiliates</div>
      </div>

    </div>
  );
}