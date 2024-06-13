import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders correctly", () => {
  render(<App />);
  expect(screen.getByText(/react testing/i)).toBeInTheDocument();
});
