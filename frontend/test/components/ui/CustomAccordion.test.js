import React from "react";
import { render, screen } from "../../test-utils";
import CustomAccordion from "../../../src/components/ui/CustomAccordion";

describe("CustomAccordion Page", () => {
  test("Test Content of Array", () => {
    const arrayTest1 = [
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
    const arrayHasElements = arrayTest1?.length > 0;
    expect(arrayHasElements).toBe(true);   
    expect(!arrayHasElements).toBe(false);
  });
  test("Test Regex", () => {
    const name = "T e S T";
    const name2 = "T e ST 1";
    const test = name.toLowerCase().replace(/\s+/g, "-");
    const test2 = name2.toLowerCase().replace(/\s+/g, "-");     
    expect(test).toBe("t-e-s-t");
    expect(test2).toBe("t-e-st-1");
  });
});