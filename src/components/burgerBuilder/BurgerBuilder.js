import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Navigate } from "react-router-dom";

import Burger from "./Burger/Burger";
import Controls from "./controls/Controls";
import Summary from "./summary/Summary";

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 40,
  meat: 80,
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
    totalPrice: 80,
    modalOpen: false,
    purchaseAble: false,
    onClickCheckout: false,
  };

  addIngredientHandle = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    for (let item of ingredients) {
      if (item.type === type) {
        item.amount++;
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseAble(ingredients);
  };

  removeIngredientHandle = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount === 0) return;
        item.amount--;
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseAble(ingredients);
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  updatePurchaseAble = (ingredients) => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);
    this.setState({
      purchaseAble: sum > 0,
    });
  };

  handleCheckout = () => {
    this.setState({
      onClickCheckout: true,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.state.ingredients} />
          <Controls
            addedIngredient={this.addIngredientHandle}
            removeIngredient={this.removeIngredientHandle}
            price={this.state.totalPrice}
            toggleModal={this.toggleModal}
            purchaseAble={this.state.purchaseAble}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader> Your Order Summary </ModalHeader>
          <ModalBody>
            <h5> Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
            <Summary ingredients={this.state.ingredients} />
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
              Continue to Checkout
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancle
            </Button>
          </ModalFooter>
          {this.state.onClickCheckout && (
            <Navigate to="/checkout" replace={true} />
          )}
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
