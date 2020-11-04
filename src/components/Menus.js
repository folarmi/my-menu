import React, { useState } from "react";
import Menu from "./Menu";
import data from "./Data";

const Menus = () => {
  const [food, setFood] = useState(data);
  const [foodToDisplay, setFoodToDisplay] = useState(data);

  const getAll = () => {
    setFoodToDisplay(data);
  };

  const filterFood = (e) => {
    const typeOfFood = e.target.id;
    const result = food.filter((meal) => meal.type === typeOfFood);
    setFoodToDisplay(result);
  };

  return (
    <section className="main">
      <h2 className="title">My Menu</h2>
      <div className="underline"></div>
      <div className="btn-container">
        <button id="all" onClick={getAll}>
          All
        </button>
        <button id="breakfast" onClick={filterFood}>
          Breakfast
        </button>
        <button id="lunch" onClick={filterFood}>
          Lunch
        </button>
        <button id="snack" onClick={filterFood}>
          Snacks
        </button>
      </div>
      <div>
        {foodToDisplay.map((meal) => {
          return <Menu key={meal.id} {...meal} />;
        })}
      </div>
    </section>
  );
};

export default Menus;
