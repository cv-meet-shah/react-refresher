import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./user.scss";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <span>
        {isLoggedIn ? (
          <span>
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            Meet Shah
          </span>
        ) : (
          <Link to="/login" className="btn btn-primary ml-3">
            Login
          </Link>
        )}
      </span>
    );
  }
}
