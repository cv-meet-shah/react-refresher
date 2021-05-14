import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./cart.scss";

export default class Cart extends Component {
  render() {
    return (
      <Link to="/checkout" className="btn btn-primary">
        Cart
      </Link>
    );
  }
}
