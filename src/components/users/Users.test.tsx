import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users component should", () => {
  test("render correctly", () => {
    render(<Users />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: "Users",
    });
    expect(headingElement).toBeInTheDocument();
  });
});
