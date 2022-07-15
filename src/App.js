import { Fragment, useState } from "react";
import Meals from "./Meals/Meals";
import Navigation from "./UI/Navigation";
import { Route, Redirect, Routes } from "react-router-dom";
import MealsPage from "./pages/MealsPage";
import Favorites from "./pages/Favorites";
import MainPage from "./pages/MainPage";
import MealItem from "./MealItem/MealItem";
import "./App.css";
import Cart from "./Cart/Cart";
import CartProvider from "./Cart/CartProvider";
const data = {
  products: [
    {
      id: "m1",
      name: "Snitzel",
      description: "Good food",
      price: 23.99,
    },
    {
      id: "m2",
      name: "Tofu",
      description: "No meat added",
      price: 13.99,
    },
    {
      id: "m3",
      name: "Beef",
      description: "Extra juicy meat",
      price: 19.99,
    },
    {
      id: "m4",
      name: "Salad",
      description: "Vegan",
      price: 11.99,
    },
  ],
};
function App() {
  const { products } = data;
  const [cartShow, setCartShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log("is it working");
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, item: exist.item + 1 } : x
        ),
        console.log("is it working?")
      );
    } else {
      setCartItems([...cartItems, { product, item: 1 }]);
      console.log("is it working?");
    }
  };

  const showCartHandler = () => {
    setCartShow(true);
  };
  const hideCartHandler = () => {
    setCartShow(false);
  };

  // const mealsList = data.map((meal) => (
  //   <MealItem
  //     id={data.id}
  //     key={data.id}
  //     title={data.title}
  //     description={data.description}
  //     price={data.price}
  //     onAdd={onAdd}
  //   />
  // ));

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button>-</button>
            <button onClick={() => console.log("y")}>+</button>
          </div>
        </div>
      ))}

      {products.map((product) => (
        <MealItem
          id={data.id}
          key={data.id}
          title={data.name}
          description={data.description}
          price={data.price}
          onAdd={onAdd}
        />
      ))}
      <nav>
        <Navigation onShowCart={showCartHandler} />
      </nav>
      {cartShow && (
        <Cart onClose={hideCartHandler} cartItems={cartItems} onAdd={onAdd} />
      )}
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
