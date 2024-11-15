import { test, chromium } from "@playwright/test";

test("login test demo", async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  // Add further steps as needed
await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a');
// await page.click("text=Login");
await page.click("'Login'");

await page.fill("input[name='email']","vanrajpardeshi8169@gmail.com");
await page.fill("input[name='password']","Vanraj1234");
await page.click("input[value='Login']");

const page1 = await context.newPage();
await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

await page1.waitForTimeout(5000);
});
