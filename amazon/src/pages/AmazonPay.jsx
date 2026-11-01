import React from "react";

export default function AmazonPay() {
  return (
    <div style={{ backgroundColor: "#eaeded", minHeight: "100vh", fontFamily: "Arial, sans-serif", padding: "10px" }}>
      
      {/* Top Header */}
      <div className="d-flex align-items-center mb-3 px-2">
        <h4 className="fw-bold m-0" style={{ color: "#0f1111", fontSize: "20px" }}>amazon pay</h4>
      </div>

      <div className="container-fluid p-0">
        <div className="row g-3">
          
          {/* Left Sidebar */}
          <div className="col-lg-3">
            <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "4px", border: "1px solid #d5d9d9" }}>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                <span style={{ fontSize: "14px", fontWeight: "bold", color: "#0f1111" }}>Amazon Pay Balance</span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#0f1111" }}>₹0.00</span>
              </div>
              <ul className="list-unstyled mb-0" style={{ fontSize: "13px", lineHeight: "2.2", color: "#007185" }}>
                <li><a href="#" className="text-decoration-none">Add Money</a></li>
                <li><a href="#" className="text-decoration-none">Add Gift Card</a></li>
                <li><a href="#" className="text-decoration-none">Account Settings</a></li>
              </ul>
            </div>
          </div>

          {/* Right Main Content Sections */}
          <div className="col-lg-9">
            
            {/* Travel Section */}
            <div className="mb-3 p-3 bg-white border rounded">
              <h6 className="fw-bold mb-3" style={{ fontSize: "15px", color: "#0f1111" }}>Travel</h6>
              <div className="row text-center g-3" style={{ fontSize: "12px" }}>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="Flights" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>Flights
                </div>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/3448/3448339.png" alt="Bus" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>Bus
                </div>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/3067/3067428.png" alt="Trains" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>Trains
                </div>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" alt="Hotels" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /> <span className="badge bg-danger" style={{ fontSize: "8px" }}>New</span><br/>Hotels
                </div>
              </div>
            </div>

            {/* Recharges Section */}
            <div className="mb-3 p-3 bg-white border rounded">
              <h6 className="fw-bold mb-3" style={{ fontSize: "15px", color: "#0f1111" }}>Recharges</h6>
              <div className="row text-center g-3" style={{ fontSize: "12px" }}>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Mobile" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>Mobile
                </div>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png" alt="App Store" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>App Store
                </div>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png" alt="DTH" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>DTH
                </div>
                <div className="col-3 cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Play" style={{ width: "28px", height: "28px", marginBottom: "5px" }} /><br/>Google Play
                </div>
              </div>
            </div>

            {/* Bill Payments Section */}
            <div className="mb-3 p-3 bg-white border rounded">
              <h6 className="fw-bold mb-3" style={{ fontSize: "15px", color: "#0f1111" }}>Bill Payments</h6>
              <div className="row text-center g-3" style={{ fontSize: "12px" }}>
                <div className="col-4 col-md-3 cursor-pointer mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/702/702814.png" alt="Electricity" style={{ width: "26px", height: "26px", marginBottom: "4px" }} /><br/>Electricity
                </div>
                <div className="col-4 col-md-3 cursor-pointer mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Postpaid" style={{ width: "26px", height: "26px", marginBottom: "4px" }} /><br/>Postpaid
                </div>
                <div className="col-4 col-md-3 cursor-pointer mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png" alt="Credit Card" style={{ width: "26px", height: "26px", marginBottom: "4px" }} /><br/>Credit Card
                </div>
                <div className="col-4 col-md-3 cursor-pointer mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="Loan" style={{ width: "26px", height: "26px", marginBottom: "4px" }} /><br/>Loan
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}