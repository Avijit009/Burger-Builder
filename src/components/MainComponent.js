import React from "react";
import { Routes, Route } from "react-router-dom";

import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Header from "./header/Header";
import Orders from "./orders/Orders";
import Checkout from "./orders/checkout/Checkout";

const MainComponent = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<BurgerBuilder/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainComponent;
