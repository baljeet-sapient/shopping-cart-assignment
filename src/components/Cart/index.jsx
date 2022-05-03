import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import Button from "../Button";
import "./cart.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";

const Index = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
  );

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
    <div id="myModal" className="modal">
      <div className="modal__content">
        <header className="modal__header">
          <p>My Cart ({itemCount} item)</p>
          <button onClick={toggleCart} className="close">
            &times;
          </button>
        </header>
        <div className="modal__conatiner">
          {cartItems.length ? (
            <>
              {cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.id} />
              ))}
              <section className="price__logo">
                <img src="/static/images/lowest-price.png" alt="lowest-price" />
                <p>You won't find it cheaper anywhere</p>
              </section>
            </>
          ) : (
            <div className="cart__empty">
              <h2>No items in your cart</h2>
              <p>Your favorite items are just a click away</p>
            </div>
          )}
        </div>

        <footer className="modal__footer">
          {cartItems.length ? (
            <>
              <span className="footer__content">
                Promo card can be apply on the payment page
              </span>
              <button className="button__checkout" onClick={toggleCart}>
                <div>Proceed to Checkout</div>
                <div>Rs. {total} &gt;</div>
              </button>
            </>
          ) : (
            <Button className="button__shopping" onClick={toggleCart}>
              <div>Start Shopping</div>
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Index;
