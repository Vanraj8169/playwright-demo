import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('vanrajpardeshi8169@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Vanraj1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Pardeshi');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a');
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});