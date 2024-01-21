import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import Burger from "./Burger/Burger";
import Controls from "./controls/Controls";

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
  };

  addIngredientHandle = (type) => {
    const ingredient = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    for (let item of ingredient) {
      if (item.type === type) {
        item.amount++;
      }
    }
    this.setState({
      ingredients: ingredient,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandle = (type) => {
    const ingredient = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    for (let item of ingredient) {
      if (item.type === type) {
        if (item.amount === 0) return;
        item.amount--;
      }
    }
    this.setState({
      ingredients: ingredient,
      totalPrice: newPrice,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
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
            toggleModal = {this.toggleModal}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader> Your Order Summary </ModalHeader>
          <ModalBody>
            <h5> Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>{" "}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleModal}> Continue to Checkout </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancle
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
