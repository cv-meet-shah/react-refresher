import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./cart.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../stores/cart.slice";
import { Badge } from "react-bootstrap";

export const Cart = () => {
  const cartSelector = useSelector(selectCart);
  let content;
  const count = cartSelector.cart.reduce((prev, curr) => prev + curr.qty, 0);
  if (count) {
    content = (
      <Badge pill variant="danger" className="cart-count-badge">
        {count}
      </Badge>
    );
  }

  return (
    <Link to="/checkout">
      <span className="mr-3 position-relative">
        <FontAwesomeIcon icon={faCartPlus} className="text-danger mr-1" />
        {content}
      </span>
    </Link>
  );
};
