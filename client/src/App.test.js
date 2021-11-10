import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a button to enter", () => {
  render(<App />);
  const linkElement = screen.getByText(/Come on in!/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders a title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to a Kawaii Doggies App!!/i);
  expect(linkElement).toBeInTheDocument();
});
