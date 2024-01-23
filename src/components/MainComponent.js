import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { authCheck } from "../redux/authActionCreators";

import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Header from "./header/Header";
import Orders from "./orders/Orders";
import Checkout from "./orders/checkout/Checkout";
import AuthForm from "./auth/AuthForm";

const mapStateToProps = (state) => {
  return {
    token: state.token, // Assuming the token is stored in the state under the key 'token'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authCheck: () => dispatch(authCheck()),
  };
};

class MainComponent extends Component {
  componentDidMount(){
    this.props.authCheck();
  }
  render() {
    let routes = null;

    if (this.props.token === null) {
      routes = (
        <Routes>
          <Route path="/signup" element={<AuthForm />} />
        </Routes>
      );
    } else {
      routes = (
        <Routes>
          <Route path="/" exact element={<BurgerBuilder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      );
    }

    return (
      <div>
        <Header />
        <div className="container">{routes}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
