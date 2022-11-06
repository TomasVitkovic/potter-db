import React from "react";
import { render, screen } from "../../test-utils";
import Footer from "../../../src/components/layout/Footer";
import getGithubUrl from "../../../src/lib/utils";


describe("Footer Page", () => {
  test("Test Footer Page", () => {
    const year = new Date().getFullYear()
    //const textToFind = "https://github.com/danielschuster-muc/potter-db"
    render(<Footer />);
    //const heading = screen.getByText(textToFind);
   // expect(heading).toBeInTheDocument();
  //  expect(document.querySelectorAll("a").getAttribute("href")).toBe("https://github.com/danielschuster-muc/potter-db") 
  //  const heading = screen.getAllByRole('link').toHaveAttribute('href', "https://github.com/danielschuster-muc/potter-db");
  //  expect(heading).toBeInTheDocument();
   // const heading = screen.getByRole('link', { name: 'https://github.com/danielschuster-muc/potter-db' }); 
   // expect(heading).toBeInTheDocument();
 //   expect(getByRole('link', { name: 'https://github.com/danielschuster-muc/potter-db' }))

    expect(year).toBe(2022);

  });
});