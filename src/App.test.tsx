import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("smoke: renders hero title and nav links", () => {
  renderWithRouter(<App />);
  const headings = screen.getAllByText(/CrossFit Black Edition/i);
  expect(headings.length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Dashboard/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /WODs/i })).toBeInTheDocument();
});
