import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../redux/authActionCreators";

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    );
  }
}

export default connect(null, mapDispatchToProps)(Logout);
