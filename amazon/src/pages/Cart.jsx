import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const newProduct = location.state?.product;

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (newProduct) {
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex((item) => item.id === newProduct.id);
        let updatedCart;
        if (existingItemIndex > -1) {
          updatedCart = prevItems.map((item, index) =>
            index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
          );
        } else {
          updatedCart = [...prevItems, { ...newProduct, qty: 1 }];
        }
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }, [newProduct]);

  const updateQty = (id, newQty) => {
    if (newQty > 0) {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Buy Now click cheyyumbo cart-il ulla items state vazhi GroupPayment page-ilekku pass cheyyunnu
  const handleBuyNow = () => {
    navigate("/grouppayment", { state: { cartItems } });
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + parsePrice(item.price) * item.qty, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div style={{ backgroundColor: "#eaeded", minHeight: "100vh", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div className="container-fluid">
        <div className="row g-4">

          <div className="col-lg-9">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                <h2 className="fw-bold m-0" style={{ fontSize: "24px", color: "#0f1111" }}>Shopping Cart</h2>
                <span style={{ fontSize: "14px", color: "#565959" }}>Price</span>
              </div>

              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  const itemSubtotal = parsePrice(item.price) * item.qty;
                  return (
                    <div key={item.id} className="row border-bottom pb-4 mb-4 align-items-center">
                      <div className="col-3 col-md-2 text-center">
                        <img src={item.img} alt={item.name} style={{ maxHeight: "150px", maxWidth: "100%", objectFit: "contain" }} />
                      </div>

                      <div className="col-9 col-md-8">
                        <h5 style={{ fontSize: "16px", color: "#007185", fontWeight: "bold" }}>{item.name}</h5>
                        <div className="text-success fw-bold" style={{ fontSize: "12px" }}>In stock</div>
                        <div style={{ fontSize: "12px", color: "#565959" }}>
                          FREE delivery available at checkout
                        </div>
                        {item.weight && (
                          <div style={{ fontSize: "12px", color: "#565959", marginTop: "4px" }}>
                            <b>Weight:</b> {item.weight}
                          </div>
                        )}

                        <div className="d-flex align-items-center gap-3 mt-3">
                          <div className="input-group input-group-sm" style={{ width: "100px" }}>
                            <button className="btn btn-outline-secondary" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                            <input type="text" className="form-control text-center bg-white" value={item.qty} readOnly />
                            <button className="btn btn-outline-secondary" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                          </div>

                          <span
                            className="text-danger fw-bold cursor-pointer"
                            style={{ fontSize: "13px", cursor: "pointer" }}
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Cancel / Delete
                          </span>
                        </div>
                      </div>

                      <div className="col-12 col-md-2 text-end mt-3 mt-md-0">
                        <span className="badge bg-danger mb-1" style={{ fontSize: "10px" }}>Amazon Fresh</span>
                        <div className="fw-bold fs-5" style={{ color: "#0f1111" }}>₹{itemSubtotal.toLocaleString("en-IN")}</div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-5">
                  <h5 className="text-muted">Your Amazon Cart is empty.</h5>
                  <p style={{ fontSize: "13px" }}>Check your saved items or continue shopping.</p>
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="text-end" style={{ fontSize: "14px" }}>
                  Subtotal ({totalQty} item): <span className="fw-bold fs-5">₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-3">
            <div className="bg-white p-3 rounded shadow-sm mb-4">
              <div className="text-success mb-2" style={{ fontSize: "13px" }}>
                ✓ <b>Your order is eligible for FREE Delivery.</b>
              </div>
              <div className="mb-3" style={{ fontSize: "16px", color: "#0f1111" }}>
                Subtotal ({totalQty} item): <span className="fw-bold">₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>

              <button
                className="btn btn-warning w-100 fw-bold shadow-sm py-2 mb-2"
                style={{ backgroundColor: "#ffd814", borderColor: "#fcd200", borderRadius: "8px" }}
                disabled={cartItems.length === 0}
              >
                Proceed to Buy
              </button>

              <button
                className="btn w-100 fw-bold shadow-sm py-2 text-dark"
                style={{ backgroundColor: "#ffa41c", borderColor: "#ff8f00", borderRadius: "8px" }}
                onClick={handleBuyNow}
                disabled={cartItems.length === 0}
              >
                ⚡ Buy Now (Fast Checkout)
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}