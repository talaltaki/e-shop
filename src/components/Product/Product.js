import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, seller, price, stock } = product;

  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-description">
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>By - {seller}</small>
        </p>
        <p>${price}</p>
        <p>Only {stock} left in stock. Order soon!</p>
      </div>
    </div>
  );
};

export default Product;
