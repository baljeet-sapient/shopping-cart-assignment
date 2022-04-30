import React from "react";
import "./product.styles.scss";
import Button from "../Button";

const Index = ({ product, addItem, ...props }) => {
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
              <Button className="btn__big" onClick={() => addItem(product)}>
                Buy Now
              </Button>
            </div>

            <Button
              className="product__btnSmall"
              onClick={() => addItem(product)}
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
