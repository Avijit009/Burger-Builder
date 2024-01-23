import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { resetIngredients } from "../../../redux/actionCreators";
import Spinner from "../../spinner/Spinner";

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
    userId: state.userId,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetIngredients: () => dispatch(resetIngredients()),
  };
};

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "", // Corrected typo in the state key
      phone: "",
      paymentType: "Cash On Delivery",
    },
    onCancelCheckout: false, // Corrected the state key
  };

  handleCancelCheckout = () => {
    this.setState({
      onCancelCheckout: true, // Corrected the state key
    });
  };

  inputChangeHandler = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitHandler = () => {
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.values,
      price: this.props.totalPrice,
      orderTime: new Date(),
      userId: this.props.userId,
    };
    axios
      .post(
        "https://burger-builder-e45ee-default-rtdb.firebaseio.com/orders.json?auth=" +
          this.props.token,
        order
      )
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMsg: "Order Placed Successfully!",
          });
          this.props.resetIngredients();
        } else {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMsg: "Something Went Wrong! Order Again!",
          });
        }
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          isModalOpen: true,
          modalMsg: "Something Went Wrong! Order Again!",
        });
      });
  };

  render() {
    let form = (
      <div>
        <h4
          style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          Payment: {this.props.totalPrice} BDT
        </h4>
        <form
          style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "4px",
          }}
        >
          <textarea
            name="deliveryAddress"
            value={this.state.values.deliveryAddress}
            placeholder="Your delivery address"
            className="form-control"
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
          ></textarea>
          <br />
          <input
            name="phone"
            value={this.state.values.phone}
            placeholder="Your Phone Number"
            className="form-control"
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
          ></input>
          <br />
          <select
            name="paymentType"
            value={this.state.values.paymentType}
            className="form-control"
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="bKash">bKash</option>
          </select>
          <br />
          <Button
            className="mr-auto"
            style={{
              backgroundColor: "#D70F64",
            }}
            onClick={this.submitHandler}
            // disabled={!this.props.purchasble}
          >
            Proceed To Buy
          </Button>

          <Button
            color="secondary"
            className="ml-5"
            onClick={this.handleCancelCheckout}
          >
            Cancel
          </Button>
        </form>
        {this.state.onCancelCheckout && <Navigate to="/" replace={true} />}
      </div>
    );

    return (
      <div>
        {this.state.isLoading ? <Spinner /> : form}
        <Modal
          isOpen={this.state.isModalOpen}
          onClick={this.handleCancelCheckout}
        >
          <ModalBody>
            <p>{this.state.modalMsg}</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
