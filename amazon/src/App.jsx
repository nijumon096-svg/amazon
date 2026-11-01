import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductGrid";
import Home from "./pages/Home";
import Login from "./components/Login";
import ProductPages from "./pages/ProductPages";
import Bestsellers from "./pages/Bestsellers";
import FreshMeat from "./pages/FreshMeat";
import AmazonPay from "./pages/AmazonPay";
import Mobiles from "./pages/Mobiles";
import Cart from "./pages/Cart";
import ProductGrid from "./components/ProductGrid";
import GroupPayment from "./pages/GroupPayment";
import YourAccount from "./pages/YourAccount";
import CreateaWishList from "./pages/CreateaWishList";
import KeepShopping from "./pages/KeepShopping";
import YourRecommendations from "./pages/YourRecommendations";
import YourOrders from "./pages/YourOrders";
import AmazonPrime from "./pages/AmazonPrime";
import YourAddresses from "./pages/YourAddresses";
import AmazonBusiness from "./pages/AmazonBusiness";
import CustomerService from "./pages/CustomerService";
import LocationModal from "./pages/LocationModal";
import USLocationModal from "./components/USLocationModal";
import TrendingDealsCard from "./pages/TrendingDealsCard";
import TodaysDeals from "./pages/TodaysDeals";
import GroceryStore from "./pages/GroceryStore";
import BabyWishlist from "./pages/BabyWishlist";
import ElectronicsDeals from "./pages/ElectronicsDeals";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/ProductPages" element={<ProductPages />} />
        <Route path="/Productgrid" element={<ProductGrid />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/freshmeat" element={<FreshMeat />} />
        <Route path="/amazonpay" element={<AmazonPay />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/grouppayment" element={<GroupPayment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/YourAccount" element={<YourAccount />} />
        <Route path="/CreateaWishList" element={<CreateaWishList />} />
        <Route path="/KeepShopping" element={<KeepShopping />} />
        <Route path="/YourRecommendations" element={<YourRecommendations />} />
        <Route path="/YourOrders" element={<YourOrders />} />
        <Route path="/AmazonPrime" element={<AmazonPrime />} />
        <Route path="/YourAddresses" element={<YourAddresses />} />
        <Route path="/AmazonBusiness" element={<AmazonBusiness />} />
        <Route path="/CustomerService" element={<CustomerService />} />
        <Route path="/LocationModal" element={<LocationModal />} />
        <Route path="/USLocationModal" element={<USLocationModal />} />
        <Route path="/TrendingDealsCard" element={<TrendingDealsCard />} />
        <Route path="/TodaysDeals" element={<TodaysDeals />} />
        <Route path="/GroceryStore" element={<GroceryStore />} />
        <Route path="/BabyWishlist" element={<BabyWishlist />} />
        <Route path="/ElectronicsDeals" element={<ElectronicsDeals />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ Checkout" element={< Checkout />} />


      </Routes>
    </div>
  );
}

export default App;