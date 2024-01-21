import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./controls/Controls";

export class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
  };

  addIngredientHandle = (type) => {
    const ingredient = [...this.state.ingredients];
    for (let item of ingredient) {
      if (item.type === type) {
        item.amount++;
      }
    }
    this.setState({
      ingredients: ingredient,
    });
  };

  removeIngredientHandle = (type) => {
    const ingredient = [...this.state.ingredients];
    for (let item of ingredient) {
      if (item.type === type) {
        if (item.amount === 0) return;
        item.amount--;
      }
    }
    this.setState({
      ingredients: ingredient,
    });
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          addedIngredient={this.addIngredientHandle}
          removeIngredient={this.removeIngredientHandle}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
