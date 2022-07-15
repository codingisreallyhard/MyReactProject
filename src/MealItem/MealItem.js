import React, { useContext, Fragment } from "react";
import CartContext from "../Cart/CartContext";
import CartItem from "../Cart/CartItem";
import Card from "../UI/Card";
import CartButton from "../UI/CartButton";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const { onAdd } = props;
  return (
    <li className={classes.mealitem}>
      <Card>
        <div>
          <h3 className={classes.mealtitle}>{props.title}</h3>
        </div>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
        <button className={classes.btncart} onClick={onAdd}>
          Add 1
        </button>
      </Card>
    </li>
  );
}
