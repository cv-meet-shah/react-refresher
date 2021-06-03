import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
  selectCart,
} from "../../stores/cart.slice";
import { toastr } from "react-redux-toastr";

import fallback from "../../utilities/assets/fallback.png";

import "./checkout.scss";
import { Link } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector(selectCart);
  const presentToast = (msg) => toastr.success("Success", msg);
  const onAddToCart = (product, id) => {
    dispatch(
      addToCart({
        id,
        product,
      })
    );
    presentToast("Product Added to cart successfully.");
  };

  const onRemoveCart = (id, qty) => {
    dispatch(
      removeFromCart({
        id,
      })
    );
    if (qty === 1) {
      presentToast("Product Removed from the cart successfully.");
      return;
    }
    presentToast("Product Quantity to removed successfully.");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (name && email && address) {
      dispatch(clearCart());
      setSubmitted(true);
    } else {
      toastr.error(
        "Incomplete form",
        "Please enter Name, Email & Address values."
      );
    }
  };

  let content = (
    <div className="container checkout-page">
      <h2 className="mb-3 mt-2">Checkout</h2>
      <Form onSubmit={onSubmit}>
        <div className="card mb-3">
          <div className="card-header">
            <Button variant="warning" type="submit" className="ml-auto d-flex">
              Proceed
            </Button>
          </div>
          <div className="card-body">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
      </Form>

      <h2 className="mb-3">Cart Details</h2>
      {cartSelector.cart.map(({ id, qty, product: details }, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <div
                  className="position-relative card-image"
                  style={{
                    backgroundImage: `url(${details.thumb || fallback})`,
                  }}
                ></div>
              </div>
              <div className="col-8">
                <h3>{details.name}</h3>
                <h4 className="qty-wrapper">
                  <div className="">
                    Quantity:
                    <Button
                      variant="outline-primary"
                      className="ml-2 mr-3"
                      title="Remove"
                      onClick={() => onRemoveCart(id, qty)}
                    >
                      -
                    </Button>
                    <b>{qty}</b>
                    <Button
                      variant="outline-primary"
                      className="ml-3"
                      title="Add"
                      onClick={() => onAddToCart(details, id)}
                    >
                      +
                    </Button>
                  </div>
                </h4>

                <div className="text-wrapper position-absolute">
                  <p className="text-grey mb-0 mt-3">
                    <span className="mr-2">{details.location.city}</span>
                    <span>| {details.mezzo_provider}</span>
                  </p>
                  <p className="border-top">
                    <span className="text-success mr-2">Open now</span>
                    <span className="text-danger mr-2">{details.cuisines}</span>
                    <span className="text-grey">
                      Cost {details.currency} {details.average_cost_for_two} for
                      two
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-1">
                <div className="float-right text-center">
                  <div
                    className="rating"
                    style={{
                      backgroundColor: "#" + details.user_rating.rating_color,
                    }}
                  >
                    {details.user_rating.aggregate_rating} <span>/5</span>
                  </div>
                  <span className="text-grey text-vote">
                    {details?.user_rating?.votes} votes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // useEffect(() => {
  if (!cartSelector.cart.length && !submitted) {
    content = (
      <div className="container checkout-page">
        <div className="card mt-3 text-center" key="600">
          <div className="card-header">
            <h2>Empty Cart</h2>
          </div>
          <div className="card-body text-center">
            There are no items in your Cart. <br />
            <Link to="/">
              <Button variant="primary" className="mt-2">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    content = (
      <div className="container checkout-page">
        <div className="card mt-3 text-center" key="200">
          <div className="card-header">
            <h2>Order Placed</h2>
          </div>
          <div className="card-body">
            Your order is placed. <br />
            <Link to="/">
              <Button variant="primary" className="mt-2">
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // }, [content, submitted, cartSelector]);

  return <>{content}</>;
};

export default Checkout;
