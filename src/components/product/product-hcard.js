import React, { Component } from "react";
import { Link } from "react-router-dom";
import fallback from "../../utilities/assets/fallback.png";

import "./product-hcard.scss";

export default class ProductHCard extends Component {
  render() {
    const {
      name,
      location,
      user_rating: rating,
      id,
      thumb,
    } = this.props.product;

    return (
      <div className="card product-hcard" to={"product/" + id}>
        <div
          className="product-hcard--img-top"
          style={{ backgroundImage: `url(${thumb || fallback})` }}
        >
          <div
            className="product-hcard--rating-container"
            style={{ backgroundColor: "#" + rating.rating_color }}
          >
            {rating.aggregate_rating}
          </div>
        </div>
        <div className="product-hcard--card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{location.locality_verbose}</p>
          <Link
            to={"/product/" + id}
            className="product-hcard--learn-more-btn mr-3"
          >
            Learn More
          </Link>
          <a href="#" className="card-link">
            + Add To cart
          </a>
        </div>
      </div>
    );
  }
}
