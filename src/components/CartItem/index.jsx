import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import "./cartItem.styles.scss";

const Index = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <section className="quantity__description">
      <div className="product__image">
        <img src={imageURL} alt={imageURL} />
      </div>
      <div className="product__description">
        <div>{name}</div>
        <div className="product__overview">
          <div className="quantity__conatiner">
            <button
              className="product__quantity"
              onClick={() => dispatch(addItem(cartItem))}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="product__quantity"
              onClick={() => dispatch(removeItem(cartItem))}
            >
              -
            </button>
            <span>X Rs. {price}</span>
          </div>

          <div>{price * quantity}</div>
        </div>
      </div>
    </section>
  );
};

export default Index;
