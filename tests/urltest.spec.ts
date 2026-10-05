import {test,expect} from '@playwright/test';

test("Verify page URL",async({page})=>{
  await page.goto("https://www.facebook.com/");

  const url=await page.url();
  console.log("url is: " + url);
  
  await expect(page).toHaveURL("https://www.facebook.com/");
  const title= await page.title();
  console.log("Page title is: " + title);
});