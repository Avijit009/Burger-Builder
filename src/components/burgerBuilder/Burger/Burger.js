import React from "react";
import Ingredient from "../ingredient/Ingredient";
import "./ Burger.css";

const Burger = (props) => {
  let ingredientArray = props.ingredients.map((item) => {
    let amountArray = [...Array(item.amount).keys()]; //Creating array here
    return amountArray.map((_) => {
      return <Ingredient type={item.type} key={Math.random} />;
    })
  })
  .reduce((arr, element) =>{
    return arr.concat(element);
  }, []);
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingredientArray}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
