import React, { useState } from "react";
import "./GroupPayment.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function GroupPayment() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  const productPrice = cartItems.length > 0
    ? cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0)
    : 0;

  const [splitType, setSplitType] = useState("equal");

  const [members, setMembers] = useState([
    { id: 1, name: "Person 1", amount: productPrice, paid: false },
  ]);

  const addMember = () => {
    const newId = members.length > 0 ? members[members.length - 1].id + 1 : 1;
    const newName = `Person ${newId}`;

    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers, { id: newId, name: newName, amount: 0, paid: false }];

      if (splitType === "equal" && productPrice > 0) {
        const splitVal = Math.round(productPrice / updatedMembers.length);
        return updatedMembers.map(m => ({ ...m, amount: splitVal, paid: false }));
      }

      return updatedMembers;
    });
  };

  const removeMember = (index) => {
    if (members.length <= 1) {
      alert("കുറഞ്ഞത് ഒരു അംഗമെങ്കിലും ഉണ്ടായിരിക്കണം!");
      return;
    }

    setMembers((prevMembers) => {
      const updatedMembers = prevMembers.filter((_, i) => i !== index);

      if (splitType === "equal" && productPrice > 0) {
        const splitVal = Math.round(productPrice / updatedMembers.length);
        return updatedMembers.map(m => ({ ...m, amount: splitVal, paid: false }));
      }

      return updatedMembers;
    });
  };

  // Person name edit cheyyanulla function
  const updateName = (index, newName) => {
    setMembers((previous) =>
      previous.map((member, i) =>
        i === index ? { ...member, name: newName } : member
      )
    );
  };

  const total = members.reduce(
    (sum, member) => sum + Number(member.amount || 0),
    0
  );

  const totalPaid = members.reduce(
    (sum, member) =>
      sum + (member.paid ? Number(member.amount) : 0),
    0
  );

  const allPaid = members.length > 0 && members.every((member) => member.paid);

  const validAmounts =
    productPrice > 0 &&
    members.length > 0 &&
    members.every((member) => Number(member.amount) > 0) &&
    total === productPrice;

  function changeSplit(type) {
    setSplitType(type);
    if (productPrice === 0 || members.length === 0) return;

    const count = members.length;
    const splitVal = Math.round(productPrice / count);

    setMembers((previous) =>
      previous.map((member) => ({
        ...member,
        amount: type === "equal" ? splitVal : member.amount,
        paid: false,
      }))
    );
  }

  function updateAmount(index, value) {
    setMembers((previous) =>
      previous.map((member, i) =>
        i === index
          ? { ...member, amount: value === "" ? "" : Number(value), paid: false }
          : member
      )
    );
  }

  function simulatePayment(index) {
    if (!validAmounts) {
      alert(`എല്ലാ അംഗങ്ങളുടെയും തുക ആകെ ചേർക്കുമ്പോൾ ₹${productPrice.toLocaleString("en-IN")} ആയിരിക്കണം.`);
      return;
    }

    setMembers((previous) =>
      previous.map((member, i) =>
        i === index ? { ...member, paid: true } : member
      )
    );
  }

  return (
    <div className="group-payment">
      <h1>Group Split Payment</h1>

      <div className="gp-product">
        <h2>🛍️ Selected Products from Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, idx) => (
            <div key={idx} className="d-flex align-items-center gap-3 my-2 border-bottom pb-2">
              <img src={item.img} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
              <div>
                <h5 style={{ fontSize: "14px", margin: 0 }}>{item.name}</h5>
                <p style={{ fontSize: "12px", color: "#565959", margin: 0 }}>Qty: {item.qty} | Price: {item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No products found in cart.</p>
        )}
        <h3 className="mt-3">Total: ₹{productPrice.toLocaleString("en-IN")}</h3>
        <p>Buy together and split the payment.</p>
      </div>

      {cartItems.length > 0 && (
        <>
          <div className="d-flex justify-content-between align-items-center my-3">
            <h3>Group Members ({members.length})</h3>
            <button className="btn btn-sm btn-primary" onClick={addMember}>
              + Add Member
            </button>
          </div>

          <h3>Choose Payment Type</h3>

          <div className="gp-options">
            <button
              className={splitType === "equal" ? "selected" : ""}
              onClick={() => changeSplit("equal")}
            >
              Equal Split
            </button>

            <button
              className={splitType === "custom" ? "selected" : ""}
              onClick={() => changeSplit("custom")}
            >
              Custom Split
            </button>
          </div>

          {members.map((member, index) => (
            <div className="gp-member" key={member.id || index}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                {/* Person Name-um edit cheyyavunna input-um */}
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateName(index, e.target.value)}
                  style={{ fontWeight: "bold", fontSize: "16px", maxWidth: "70%" }}
                />
                {members.length > 1 && (
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeMember(index)}
                    style={{ fontSize: "11px", padding: "4px 8px" }}
                  >
                    Remove
                  </button>
                )}
              </div>

              <label>
                Amount (₹)
                <input
                  type="number"
                  min="1"
                  value={member.amount}
                  disabled={splitType === "equal" || member.paid}
                  onChange={(e) =>
                    updateAmount(index, e.target.value)
                  }
                />
              </label>

              <p className="mt-2">
                Status:{" "}
                <strong className={member.paid ? "gp-paid" : "gp-pending"}>
                  {member.paid ? "Payment Success" : "Payment Pending"}
                </strong>
              </p>

              <button
                className="gp-pay"
                disabled={member.paid}
                onClick={() => simulatePayment(index)}
              >
                {member.paid ? "Paid ✓" : "Simulate Payment"}
              </button>
            </div>
          ))}

          <div className="gp-summary">
            <h3>Order Summary</h3>

            <p>
              Total amount: ₹{total.toLocaleString("en-IN")}
            </p>

            <p>
              Total paid: ₹{totalPaid.toLocaleString("en-IN")}
            </p>

            <p>
              Members paid: {members.filter((m) => m.paid).length}/{members.length}
            </p>

            {splitType === "custom" && !validAmounts && (
              <p className="gp-error">
                Amounts must total exactly ₹{productPrice.toLocaleString("en-IN")}.
              </p>
            )}

            <div className={allPaid ? "gp-success" : "gp-waiting"}>
              {allPaid
                ? "ORDER CONFIRMED (DEMO)"
                : `ORDER PENDING — Waiting for all ${members.length} payments`}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GroupPayment;