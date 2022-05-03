import React from "react";
import "./app.scss";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductListingPage from "./pages/ProductListingPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

const App = () => {
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <div>
      <Header />
      {!hidden && <Cart />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product-list/*" element={<ProductListingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
