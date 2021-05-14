import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./home.scss";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.setState({
      products: Array(10)
        .fill(0)
        .map((i, index) => index + 1),
    });
  }
  render() {
    return (
      <div className="home-page">
        <p>Home Page</p>
        <ul className="list-group product-list m-auto">
          <li class="list-group-item disabled">Our Products</li>
          {this.state.products &&
            this.state.products.map((product) => (
              <Link to={"product/" + product} className="list-group-item">
                {product}
              </Link>
            ))}
        </ul>
      </div>
    );
  }
}
