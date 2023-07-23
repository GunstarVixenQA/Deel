import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  await page.goto('https://www.google.co.uk/');
  await expect(page).toHaveTitle('Google');

  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('how to make pancakes');
  await page.getByLabel('Google Search').first().click();

  await expect(page).toHaveTitle(/how to make pancakes/);


  await page.getByRole('link', { name: 'Easy pancakes recipe BBC Good Food https://www.bbcgoodfood.com › Recipes' }).click();
  await expect(page).toHaveTitle(/Easy pancake/);
});