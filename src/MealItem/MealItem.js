import React, { useContext } from "react";
import CartContext from "../Cart/CartContext";
import CartItem from "../Cart/CartItem";
import Card from "../UI/Card";
import CartButton from "../UI/CartButton";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
export default function MealItem(props) {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.mealitem}>
      <Card>
        <div>
          <h3 className={classes.mealtitle}>{props.title}</h3>
        </div>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
        <button className={classes.btncart} onClick={props.onAdd}>
          Add
        </button>
      </Card>
      <div></div>
      <MealItemForm
        className={classes.btncart}
        id={props.id}
        onAddToCart={addToCartHandler}
      ></MealItemForm>
    </li>
  );
}
