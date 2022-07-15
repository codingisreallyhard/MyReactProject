import React, { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
export default function Cart(props) {
  const { cartItemsNull, onAdd, onRemove } = props;
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <Modal onClose={props.onClose}>
      <h2>Cart Items</h2>

      <div className={classes.total}>
        <span>Total Amount</span>
      </div>
      <div className={classes.action}>
        <button className={classes.buttonclose} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
