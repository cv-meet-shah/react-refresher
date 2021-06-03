import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadCart, selectCart } from "../../stores/cart.slice";
import { Badge } from "react-bootstrap";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector(selectCart);
  const cartStatus = cartSelector.status;

  useEffect(() => {
    if (cartStatus === "idle") {
      dispatch(loadCart());
    }
  }, [cartStatus, dispatch]);

  let content;

  if (cartStatus === "loaded") {
    const count = cartSelector.cart.reduce((prev, curr) => prev + curr.qty, 0);
    if (count) {
      content = (
        <Badge pill varient="secondary">
          {count}
        </Badge>
      );
    }
  }
  return (
    <Link to="/checkout" className="text-success">
      <FontAwesomeIcon icon={faCartPlus} className="mr-3" />
      {content}
    </Link>
  );
};
