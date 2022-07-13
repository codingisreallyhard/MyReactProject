import React, { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartContext = useContext(CartContext);
  const totalAmount = `${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}
