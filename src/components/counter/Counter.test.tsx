import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component should", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementElement);

    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementElement);
    await user.click(incrementElement);

    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("2");
  });
});
