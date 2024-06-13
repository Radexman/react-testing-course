import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet component should", () => {
  it("render name passed in the prop", () => {
    render(<Greet name="Emilia" />);
    const greetElement = screen.getByText(/hello emilia/i);
    expect(greetElement).toBeInTheDocument();
  });

  it("render default value is prop not passed", () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello user/i);
    expect(greetElement).toBeInTheDocument();
  });
});
