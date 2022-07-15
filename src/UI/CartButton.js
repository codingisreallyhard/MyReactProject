import React, { useContext, useState } from "react";
import CartContext from "../Cart/CartContext";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
    </button>
  );
};

export default CartButton;
