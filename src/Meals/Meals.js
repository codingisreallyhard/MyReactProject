import React, { Fragment } from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./Meals.module.css";

function Meals(props) {
  const DUMMY_MEALS = [
    {
      id: "m1",
      title: "Snitzel",
      description: "Good food",
      price: 23.99,
    },
    {
      id: "m2",
      title: "Tofu",
      description: "No meat added",
      price: 13.99,
    },
    {
      id: "m3",
      title: "Beef",
      description: "Extra juicy meat",
      price: 19.99,
    },
    {
      id: "m4",
      title: "Salad",
      description: "Vegan",
      price: 11.99,
    },
  ];
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      title={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Fragment>
      <section className={classes.flexcon}>
        <ul>{mealsList}</ul>
      </section>
      <div></div>
    </Fragment>
  );
}

export default Meals;
