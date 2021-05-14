import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./user.scss";
export default class User extends Component {
  render() {
    return (
      <Link to="/login" className="btn btn-primary ml-3">
        Login
      </Link>
    );
  }
}
