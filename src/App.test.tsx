import React from "react";
import { render, screen } from "@testing-library/react";
import PortafolioApp from "./PortafolioApp";

test("renders learn react link", () => {
  render(<PortafolioApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
