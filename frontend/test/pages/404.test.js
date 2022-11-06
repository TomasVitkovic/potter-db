import React from "react";
import { render, screen } from "../test-utils";
import NotFound from "../../src/pages/404";

describe("NotFound Page", () => {
  test("Test NotFound Page", () => {
    const textToFind = "404 - Page Not Found"
    render(<NotFound />);
    const heading = screen.getByText(textToFind);
    expect(heading).toBeInTheDocument();
    const heading2 = screen.getByRole('heading', { level: 3 });
    expect(heading2).toBeInTheDocument();
  });
});