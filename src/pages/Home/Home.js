import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import ProdutcHCard from "../../components/product/product-hcard";

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
        {this.carousel()}
        <h3>Our exciting Products</h3>
        <div className="d-flex product-section">
          {this.state.products &&
            this.state.products.map((product) => (
              <ProdutcHCard productId={product} />
            ))}
        </div>
      </div>
    );
  }

  carousel() {
    return (
      // 400 x 600
      <Carousel className="home-page--carousel">
        <Carousel.Item>
          <div
            className="d-block w-100 home-page--carousel--image-block home-page--carousel--image-1"
            src="/back1.jpg"
            alt="First slide"
          ></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100 home-page--carousel--image-block home-page--carousel--image-2"
            src="/back1.jpg"
            alt="First slide"
          ></div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100 home-page--carousel--image-block home-page--carousel--image-3"
            src="/back1.jpg"
            alt="First slide"
          ></div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
