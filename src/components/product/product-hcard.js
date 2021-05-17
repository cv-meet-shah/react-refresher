import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./product-hcard.scss";

export default class ProdutcHCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="card product-hcard"
        to={"product/" + this.props.productId}
      >
        <img className="card-img-top" src="" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={"/product/" + this.props.productId} className="mr-3">
            Go To Details
          </Link>
          <a href="#" className="card-link">
            Add To cart
          </a>
        </div>
      </div>
    );
  }
}
