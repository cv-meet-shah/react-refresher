import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    let productCount;
    if (this.state.count) {
      productCount = this.state.count;
    }
    return (
      <Link to="/checkout">
        <FontAwesomeIcon icon={faCartPlus} className="mr-3" />
        {productCount}
      </Link>
    );
  }
}
