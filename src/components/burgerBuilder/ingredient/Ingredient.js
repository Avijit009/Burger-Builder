import React from "react";
import "./ingredient.css";

const Ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-top":
      ingredient = (
        <div>
          <img src='assets/images/top.png' alt="Bread Bottom" />
        </div>
      );
      break;

    case "bread-bottom":
      ingredient = (
        <div>
          <img src="assets/images/bottom.png" alt="Bread Top" />
        </div>
      );
      break;

    case "meat":
      ingredient = (
        <div>
          <img src="assets/images/meat.png" alt="Meat" />
        </div>
      );
      break;

    case "salad":
      ingredient = (
        <div>
          <img src="assets/images/salad.png" alt="Salad" />
        </div>
      );
      break;

    case "cheese":
      ingredient = (
        <div>
          <img src="assets/images/cheese.png" alt="Cheese" />
        </div>
      );
      break;

    default:
      ingredient = null;
  }
  
  return (
    <div className="Ingredient">
      {ingredient}
    </div>
  );
};

export default Ingredient;
