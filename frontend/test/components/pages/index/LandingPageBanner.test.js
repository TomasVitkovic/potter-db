import React from "react";
import { render, screen } from "../../../test-utils";
import LandingPageBanner from "../../../../src/components/pages/index/LandingPageBanner";

describe("LandingPageBanner Page", () => {
    test("Test Image", () => {
      render(<LandingPageBanner />);   
      const altImage = screen.getByAltText("Potter DB Banner")
      expect(altImage).toBeInTheDocument()
      const srcImage = document.querySelector("img")
      expect(srcImage.sizes).toContain("100vw")                 
    });
    test("Test Heading Level", () => {
        render(<LandingPageBanner />);   
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
      });
  });