import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartButton from "./CartButton";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <Fragment>
      <nav className={classes.topnav}>
        <NavLink to="/">
          <h1 className={classes.intro}>ReactMeals</h1>
        </NavLink>
        <NavLink to="/meals" className={classes.navlink}>
          Meals
        </NavLink>
        <NavLink to="/Favorites" className={classes.navlink}>
          Favorites
        </NavLink>
        <CartButton onClick={props.onShowCart} />
      </nav>
    </Fragment>
  );
};

export default Navigation;
