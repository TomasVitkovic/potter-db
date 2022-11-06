import React from "react";
import { render, screen } from "../test-utils";
import InternalServerError from "../../src/pages/500";

describe("InternalServerError Page", () => {
  test("Test InternalServerError Page", () => {
    const textToFind = "500 - Server-side error occurred"
    render(<InternalServerError />);
    const heading = screen.getByText(textToFind);
    expect(heading).toBeInTheDocument();
    const heading2 = screen.getByRole('heading', { level: 3 });
    expect(heading2).toBeInTheDocument();
  });
});