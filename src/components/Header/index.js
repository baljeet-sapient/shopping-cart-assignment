import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Index = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="img-container"
          src="static/images/logo.png"
          alt="Sabka Bazaar Logo"
        />
        <div className="header__links">
          <Link to="/">Home</Link>
          <Link to="/product-list">Products</Link>
        </div>
      </div>
      <div className="header__cartIcon">
        <div className="header__options">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="cart">
          <div className="cartDisplayContent">
            <img src="static/images/cart.svg" alt="Cart Icon" />
            <span>0 Items</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
