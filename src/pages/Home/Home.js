import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CategorySection } from "../../components";
import {
  fetchAllCategories,
  selectAllCategories,
} from "../../stores/category.slice";

import "./home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const categorySelector = useSelector(selectAllCategories);
  const categoryStatus = categorySelector.status;

  useEffect(() => {
    if (categoryStatus === "idle") {
      dispatch(fetchAllCategories());
    }
  }, [categoryStatus, dispatch]);

  let content;

  if (categoryStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (categoryStatus === "succeed") {
    content = categorySelector.categories.map((category) => (
      <CategorySection category={category} key={category.id} />
    ));
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
        <div>{content}</div>
      </div>
    </React.Fragment>
  );
};
