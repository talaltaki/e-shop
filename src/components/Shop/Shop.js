import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  // const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(fakeData);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>

      <div className="cart-container">
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default Shop;
