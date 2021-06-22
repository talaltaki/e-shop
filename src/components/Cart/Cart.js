import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((total, product) => total + product.price, 0);

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);

  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {total.toFixed(2)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT: {tax}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
