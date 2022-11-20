import React from "react";
import { render, screen } from "../../../test-utils";
import AboutContent from "../../../../src/components/pages/about/AboutContent";

describe("AboutContent Page", () => {
  test("Test Heading Level", () => {
    render(<AboutContent />);   
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
  });
  test("Test Content of Page", () => {
    render(<AboutContent />);
    const heading = screen.getByText("About Potter DB");
    const heading2 = screen.getByText("Contributing");
    expect(heading).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });
  
  const tools = [
    {
      name: "Ruby on Rails",
      description: "The API is built with this Framework",
      link: "https://ruby-lang.org",
    },
    {
      name: "Next.js",
      description: "This Website uses Next.js",
      link: "https://nextjs.org",
    },
    {
      name: "PostgreSQL",
      description: "The data is saved in a PostgreSQL database",
      link: "https://postgresql.org",
    },
  ];
  test('Test Content of Array', () => {
     expect(tools).toEqual(expect.arrayContaining([expect.objectContaining({link: "https://ruby-lang.org"})]))
     expect(tools).toEqual(expect.arrayContaining([expect.objectContaining({link: "https://nextjs.org"})]))
     expect(tools).toEqual(expect.arrayContaining([expect.objectContaining({link: "https://postgresql.org"})]))
  }); 
}); 