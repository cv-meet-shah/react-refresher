import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../stores/cart.slice";
import fallback from "../../utilities/assets/fallback.png";
import { toastr } from "react-redux-toastr";

import "./product-hcard.scss";

export const ProductHCard = ({ product }) => {
  const { name, location, user_rating: rating, id, thumb } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        product,
      })
    );
    toastr.success("Success", "Product Added to cart successfully.");
  };

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
        <Button variant="link" className="card-link" onClick={handleAddToCart}>
          + Add To cart
        </Button>
      </div>
    </div>
  );
};
