import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  //   console.log("cart:", cart);
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart &&
          cart.items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
      </ul>
      <h4>Total bill : $ {total}</h4>
    </div>
  );
};

export default Cart;
