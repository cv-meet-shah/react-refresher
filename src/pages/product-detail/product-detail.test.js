import React from "react";
import { render, cleanup } from "@testing-library/react";
import ProductDetail from "./product-detail";

afterEach(cleanup);

it("matches product detail snapshot", async () => {
  const { asFragment } = render(<ProductDetail />);
  expect(asFragment(<ProductDetail />)).toMatchSnapshot();
});
