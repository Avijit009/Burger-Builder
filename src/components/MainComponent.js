import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { authCheck } from "../redux/authActionCreators";

import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Header from "./header/Header";
import Orders from "./orders/Orders";
import Checkout from "./orders/checkout/Checkout";
import AuthForm from "./auth/AuthForm";
import LogOut from "./auth/LogOut";

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
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/signup" element={<AuthForm />} />
        </Routes>
      );
    } else {
      routes = (
        <Routes>
          <Route path="/" exact element={<BurgerBuilder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signout" element={<LogOut />} />
          <Route path="/" element={<Navigate to="/" />} />
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
