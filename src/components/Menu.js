import React from "react";

const Menu = ({ id, name, price, details, image }) => {
  return (
    <div className="card">
      <div className="column">
        <img src={image} alt={name} />
      </div>
      <div className=" column card-body">
        <div className="meal-info">
          <h4>{name}</h4>
          <h4 id="price">&#8358;{price}</h4>
        </div>
        <div className="line"></div>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Menu;
