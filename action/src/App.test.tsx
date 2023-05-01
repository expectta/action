import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Greeting from "./component/Greeting";
import add from "./utils/add";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a greeting message", () => {
  render(<Greeting name="John" />);
  const greetingElement = screen.getByText(/Hello, John!/i);
  expect(greetingElement).toBeInTheDocument();
});

test("add correctly", () => {
  expect(add(2, 3)).toBe(5);
});
