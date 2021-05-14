import React from "react";
import { render, cleanup } from "@testing-library/react";
import Checkout from "./checkout";

afterEach(cleanup);

it("matches checkout page snapshot", async () => {
  const { asFragment } = render(<Checkout />);
  expect(asFragment(<Checkout />)).toMatchSnapshot();
});
