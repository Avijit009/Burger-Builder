import React, { Component } from "react";
import { Button } from "reactstrap";
import { Navigate } from "react-router-dom";

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
    console.log(this.state.values);
    // Perform further actions (e.g., send data to the server)
  };

  render() {
    return (
      <div>
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
          >
            Proceed To Buy
          </Button>

          <Button color="secondary" className="ml-5" onClick={this.handleCancelCheckout}>
            Cancel
          </Button>
        </form>
        {this.state.onCancelCheckout && <Navigate to="/orders" replace={true} />}
      </div>
    );
  }
}

export default Checkout;
