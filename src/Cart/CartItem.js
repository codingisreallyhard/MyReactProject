import React from "react";

function CartItem(props) {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{props.price}</span>
          <span>{props.amount}</span>
        </div>
        <div>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onRemove}>-</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
