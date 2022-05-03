import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./header.styles.scss";

const Index = () => {
  const dispatch = useDispatch();

  const itemCount = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
  );

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <nav className="header container">
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
          <Link to="/login">SignIn</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="cart" onClick={toggleCart}>
          <div className="cartDisplayContent">
            <img src="static/images/cart.svg" alt="Cart Icon" />
            <span>{itemCount} items</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
