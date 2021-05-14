import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup);

it("matches home snapshot", async () => {
  const { asFragment } = render(<Home />);
  expect(asFragment(<Home />)).toMatchSnapshot();
});
