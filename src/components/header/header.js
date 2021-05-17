import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import User from "../user/user";

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand h1">
          Bootstrap
        </Link>
        <span className="ml-auto">
          <Cart />
          <User />
        </span>
      </nav>
    );
  }
}
