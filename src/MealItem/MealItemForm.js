import React, { useRef, useState } from "react";
import CartButton from "../UI/CartButton";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    return (
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button onClick={props.cartAddItemHandler}>Add</button>
      </form>
    );
  };
}
export default MealItemForm;
