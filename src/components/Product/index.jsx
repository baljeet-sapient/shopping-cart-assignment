import React from "react";
import "./product.styles.scss";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const Index = ({ product, ...props }) => {
  const dispatch = useDispatch();

  return (
    <section className="product">
      <h4>{product.name}</h4>
      <div className="product__details">
        <img
          className="product__img"
          src={product.imageURL}
          alt={product.name}
        />

        <div className="product__desc">
          <p className="product__para">{product.description}</p>

          <div className="product_btns">
            <div className="product__btnBig">
              <span>MRP Rs.{product.price}</span>
              <Button
                className="btn__big"
                onClick={() => dispatch(addItem(product))}
              >
                Buy Now
              </Button>
            </div>

            <Button
              className="product__btnSmall"
              onClick={() => dispatch(addItem(product))}
            >
              Buy Now @ Rs.{product.price}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
