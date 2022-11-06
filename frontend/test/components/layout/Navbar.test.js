import React from "react";
import { render, screen } from "../../test-utils";
import Navbar from "../../../src/components/layout/Navbar";

describe("Navbar Page", () => {
  test("Test Navbar", () => {
    render(<Navbar />);
    const text = screen.getByText("Potter DB");
    expect(text).toBeInTheDocument();
    const heading = screen.getByRole('heading', { level: 5 });
    expect(heading).toBeInTheDocument();    
  });
});