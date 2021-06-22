import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddProduct }) => {
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

        <button
          className="main-button"
          onClick={() => handleAddProduct(product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
