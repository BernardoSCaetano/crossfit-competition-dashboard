import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test("routes: /dashboard shows Dashboard title", () => {
  renderAt("/dashboard");
  expect(screen.getByText(/Athlete Dashboard/i)).toBeInTheDocument();
});

test("routes: /wods shows WODs page", () => {
  renderAt("/wods");
  expect(screen.getByText(/Workouts of the Day/i)).toBeInTheDocument();
});

test("routes: unknown redirects home", () => {
  renderAt("/unknown-path-xyz");
  const headings = screen.getAllByText(/CrossFit Black Edition/i);
  expect(headings.length).toBeGreaterThan(0);
});
