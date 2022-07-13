import React, { useContext } from "react";
import CartContext from "../Cart/CartContext";
import Card from "../UI/Card";
import classes from "./MealItem.module.css";

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
    <div className={classes.mealitem}>
      <Card>
        <li>
          <div>
            <h3 className={classes.mealtitle}>{props.title}</h3>
          </div>

          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price}</div>
          <button className={classes.btncart} onAddToCart={addToCartHandler}>
            Add To Cart
          </button>
        </li>
      </Card>
    </div>
  );
}
