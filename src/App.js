import { Fragment } from "react";
import Meals from "./Meals/Meals";
import Navigation from "./UI/Navigation";
import { Route, Redirect, Routes } from "react-router-dom";
import MealsPage from "./pages/MealsPage";
import Favorites from "./pages/Favorites";
import MainPage from "./pages/MainPage";
import MealItem from "./MealItem/MealItem";

const DUMMY_DATA = [
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

function App() {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>

      <main>
        <Routes>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/meals" element={<MealsPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
