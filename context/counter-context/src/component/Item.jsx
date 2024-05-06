import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = (props) => {
  const { items, setItems } = useContext(CartContext);
  console.log(items);

  //   function handleAddToCart(name, price) {
  //     // Copy the current cart items
  //     const updatedCartItems = cart.items.map((item) => {
  //       if (item.name === name) {
  //         // If item with the same name exists, update its price
  //         return {
  //           ...item,
  //           price: item.price + price,
  //         };
  //       } else {
  //         // Otherwise, return the item unchanged
  //         return item;
  //       }
  //     });

  //     // Check if the item with the specified name was found in the cart
  //     const itemExists = updatedCartItems.some((item) => item.name === name);

  //     // Update the cart items based on whether the item was found or not
  //     if (!itemExists) {
  //       // Item does not exist in cart, add it as a new item
  //       cart.setItems((items) => [...items, { name: name, price: price }]);
  //     } else {
  //       // Item exists in cart, update the cart with the modified items
  //       cart.setItems((items) => [...updatedCartItems]);
  //     }
  //   }

  function handleAddToCart(name, price) {
    //    const { items, setItems } = cart;

    const itemIndex = items.findIndex((item) => item.name === name);

    if (itemIndex !== -1) {
      // Item exists in cart, update its price
      const updatedItems = items.map((item, index) =>
        index === itemIndex ? { ...item, price: item.price + price } : item
      );
      setItems(updatedItems);
    } else {
      // Item does not exist in cart, add it as a new item
      setItems([...items, { name: name, price: price }]);
    }
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <p>price: ${props.price}</p>
      <button
        // onClick={() =>
        //   cart.setItems([
        //     ...cart.items,
        //     { name: props.name, price: props.price },
        //   ])
        // }
        onClick={() => handleAddToCart(props.name, props.price)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
