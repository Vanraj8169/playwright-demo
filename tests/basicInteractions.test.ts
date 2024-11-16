// import { expect, test } from "@playwright/test";

import test, { expect } from "@playwright/test";

// test("", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/simple-form-demo"
//   );
//   const sum1input = page.locator("#sum1");
//   const sum2input = page.locator("#sum2");

//   const getValuesBtn = page.locator('//*[@id="showInput"]');
//   let num1 = 121;
//   let num2 = 546;
//   await sum1input.type("" + num1);
//   await sum2input.type("" + num2);
//   await getValuesBtn.click();
//   const result = page.locator("#addmessage");
//   console.log(await result.textContent());
//   let expectedResult = num1 + num2;
//   expect(result).toHaveText("" + expectedResult);
// });


test("Checkbox",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})