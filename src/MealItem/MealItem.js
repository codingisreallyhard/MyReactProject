import React from "react";
import Card from "../UI/Card";
import classes from "./MealItem.module.css";

export default function MealItem(props) {
  return (
    <div className={classes.mealitem}>
      <Card>
        <li>
          <div>
            <h3 className={classes.mealtitle}>{props.title}</h3>
          </div>

          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price}</div>
          <button className={classes.btncart}>Add To Cart</button>
        </li>
      </Card>
    </div>
  );
}
