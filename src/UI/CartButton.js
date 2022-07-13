import React, { useContext, useState } from "react";
import CartContext from "../Cart/CartContext";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const numCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <span>{numCartItems}</span>
    </button>
  );
};

export default CartButton;
