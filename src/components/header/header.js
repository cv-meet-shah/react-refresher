import React, { Component } from "react";
import Cart from "../cart/cart";
import User from "../user/user";

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <div>
        <p>Header Component</p>
        <Cart />
        <User></User>
      </div>
    );
  }
}
