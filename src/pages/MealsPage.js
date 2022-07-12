import React from "react";
import { useParams } from "react-router-dom";
import Meals from "../Meals/Meals";
function MealsPage() {
  const params = useParams();
  return (
    <section>
      <h1>Meals section</h1>
      <div>
        <Meals />
      </div>
    </section>
  );
}

export default MealsPage;
