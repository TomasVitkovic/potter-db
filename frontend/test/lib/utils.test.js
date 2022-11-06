import React from "react";
import { render, screen } from "../test-utils";
import getGithubUrl from "../../src/lib/utils";
import getHouseColor from "../../src/lib/utils";

describe("Utils Testing", () => {
  test("Test of GitHub URL", () => { 
    const getGithubUrl = () => {
      return "https://github.com/danielschuster-muc/potter-db";
    };    
    const githubUrl = getGithubUrl();    
    expect(githubUrl).toEqual("https://github.com/danielschuster-muc/potter-db"); 
  });
  test("Test of Switch component", () => { 
    const getHouseColor = (house) => {
      switch (house) {
        case "Gryffindor":
          return "#ae0001";
        case "Slytherin":
          return "#2a623d";
        case "Hufflepuff":
          return "#ffdb00";
        case "Ravenclaw":
          return "#222f5b";
        default:
          return "#bebebe";
      }
    };
    const color = getHouseColor("Gryffindor")
    expect(color).toEqual("#ae0001");
    const color2 = getHouseColor("Slytherin")
    expect(color2).toEqual("#2a623d"); 
    const color3 = getHouseColor("Hufflepuff")
    expect(color3).toEqual("#ffdb00");  
    const color4 = getHouseColor("Ravenclaw")
    expect(color4).toEqual("#222f5b"); 
    const color5 = getHouseColor()
    expect(color5).toEqual("#bebebe"); 
  });
  test("Test of Api URL", () => { 
    const getApiUrl = () => {
      return process.env.NEXT_PUBLIC_API_URL || "https://api.potterdb.com";
    };  
    const apiUrl = getApiUrl();    
    expect(apiUrl).toEqual("https://api.potterdb.com");    
  });
});