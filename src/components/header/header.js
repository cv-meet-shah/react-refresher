import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import User from "../user/user";

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex p-3">
        <span>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </span>
        <span className="ml-auto">
          <Cart />
          <User />
        </span>
      </div>
    );
  }
}
