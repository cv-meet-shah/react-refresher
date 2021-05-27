import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductHCard } from "..";
import {
  fetchAllProductsByCategoryId,
  selectProductsByCategoryId,
} from "../../stores/products.slice";

import "./category-section.scss";

export const CategorySection = (props) => {
  const { name, id } = props.category;

  const dispatch = useDispatch();
  const productSelector = useSelector((state) =>
    selectProductsByCategoryId(state, id)
  );
  const productStatus = productSelector.status;

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchAllProductsByCategoryId(id));
    }
  }, [productStatus, id, dispatch]);

  let content;

  if (productStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (productStatus === "succeed") {
    content = productSelector.products.map((product) => (
      <ProductHCard product={product} key={product.id} />
    ));

    if (!productSelector.products.length) {
      content = <div className="loader pl-3">No Restaurents available...</div>;
    }
  }

  return (
    <section className="category-section mb-2">
      <h3 className="pl-3">{name}</h3>
      <div className="category-section--products-container">{content}</div>
    </section>
  );
};
