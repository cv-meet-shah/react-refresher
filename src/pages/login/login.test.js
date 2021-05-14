import React from "react";
import { render, cleanup } from "@testing-library/react";
import Login from "./login";

afterEach(cleanup);

it("matches login page snapshot", async () => {
  const { asFragment } = render(<Login />);
  expect(asFragment(<Login />)).toMatchSnapshot();
});
