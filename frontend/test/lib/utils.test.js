import React from "react";
import { render, screen } from "../test-utils";
import {getGithubUrl} from "../../src/lib/utils";
import {getHouseColor} from "../../src/lib/utils";
import {getApiUrl} from "../../src/lib/utils";

describe("Utils Testing", () => {  
  //nezaujima nas vysledok, ale ci doslo k volaniu
  //ci sa vykonali vsetky ocakavane akcie
  //returnvalue -> hodnota, kt sa vrati ked bude zavolany mock
  test("Test of calling APIs URL with mock", () => { 
    //const githubUrl = getGithubUrl();
    const apiUrl = getApiUrl();

    const mock1 = jest.fn().mockImplementation(getGithubUrl);
    mock1.mockReturnValue("test");
    mock1(getGithubUrl);
    mock1(getGithubUrl);    
    expect(mock1).toHaveBeenCalledTimes(2);
    expect(mock1).toHaveBeenCalledWith(getGithubUrl);
    expect(mock1(getGithubUrl)).toBe("test");

    const mock2 = jest.fn().mockImplementation(() => "https://api.potterdb.com"); 
    expect(mock2(apiUrl)).toBe("https://api.potterdb.com");
    expect(mock2).toHaveBeenCalledTimes(1);    
    expect(mock2).toHaveBeenCalledWith(apiUrl);  
  }); 
  test("Test of GitHub URL", () => { 
    const githubUrl = getGithubUrl();    
    expect(githubUrl).toEqual("https://github.com/danielschuster-muc/potter-db"); 
  });
  test("Test of Switch component", () => {   
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
    const apiUrl = getApiUrl();    
    expect(apiUrl).toEqual("https://api.potterdb.com");    
  });
});