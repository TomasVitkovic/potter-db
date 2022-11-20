import React from "react";
import { render, screen } from "../../test-utils";
import Footer from "../../../src/components/layout/Footer";
import getGithubUrl from "../../../src/lib/utils";


describe("Footer Page", () => {
  test("Test Footer Page", () => {
    const year = new Date().getFullYear()  
    render(<Footer />);
    expect(year).toBe(2022);
  });
});