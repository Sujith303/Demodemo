import {test,expect} from '@playwright/test';

test("Verify page title",async({page})=>{
  await page.goto("https://www.facebook.com/");

  const title= await page.title();
  console.log("Page title is: " + title);
  
  // Expect a title "to contain" a substring.
  
});
