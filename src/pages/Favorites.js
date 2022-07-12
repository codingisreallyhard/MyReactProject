import React from "react";
import classes from "./Favorites.module.css";
function Favorites() {
  return (
    <section>
      <h1 className={classes.title}>Favorites</h1>
      <div>
        <p className={classes.p}>
          This is where your favorite items are stored!
        </p>
      </div>
    </section>
  );
}

export default Favorites;
