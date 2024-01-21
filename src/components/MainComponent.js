import React from "react";
import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Header from "./header/Header";

const MainComponent = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <BurgerBuilder />
      </div>
    </div>
  );
};

export default MainComponent;
