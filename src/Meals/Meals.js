import React, { Fragment } from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./Meals.module.css";

const Meals = (props) => {
  const data = [
    {
      id: "m1",
      meal: "Snitzel",
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

  // const { onAdd } = props;
  // const mealsList = data.map((meal) => (
  //   <MealItem
  //     id={meal.id}
  //     key={meal.id}
  //     title={meal.title}
  //     description={meal.description}
  //     price={meal.price}
  //     onAdd={onAdd}
  //   />
  // ));
  // return <div>{mealsList}</div>;
};
export default Meals;
