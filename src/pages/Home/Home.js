import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProductHCard } from "../../components";
import {
  fetchAllProducts,
  selectAllProducts,
} from "../../stores/products.slice";

import "./home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const productSelector = useSelector(selectAllProducts);
  const productStatus = productSelector.status;

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (productStatus === "succeed") {
    content = productSelector.products.map((product) => (
      <ProductHCard product={product} key={product.id} />
    ));
    console.log("content", content);
  }

  const renderedCarousel = (
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

  return (
    <React.Fragment>
      <div className="home-page">
        {renderedCarousel}
        <h3 className="pl-3">Our exciting Products</h3>
        <div className="d-flex product-section">{content}</div>
      </div>
    </React.Fragment>
  );
};
