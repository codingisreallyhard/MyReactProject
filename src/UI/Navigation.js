import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <nav className={classes.topnav}>
        <NavLink to="/">
          <h1 className={classes.intro}>ReactMeals</h1>
        </NavLink>
        <NavLink
          to="/meals"
          activeClassName="active"
          className={classes.navlink}
        >
          Meals
        </NavLink>
        <NavLink
          to="/Favorites"
          activeClassName="active"
          className={classes.navlink}
        >
          Favorites
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default Navigation;
