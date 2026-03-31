const { test, expect } = require('@playwright/test');

// URL trang cần test search - thay đổi theo project thực tế
const BASE_URL = 'https://the-internet.herokuapp.com';

test.describe('Search feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should display results when searching with a valid keyword', async ({ page }) => {
    await page.getByRole('searchbox').fill('login');
    await page.getByRole('button', { name: /search/i }).click();

    const results = page.locator('.result-item'); // cập nhật selector theo UI thực tế
    await expect(results).not.toHaveCount(0);
  });

  test('should show "no results" message when keyword has no match', async ({ page }) => {
    await page.getByRole('searchbox').fill('xyzxyzxyz_no_match_999');
    await page.getByRole('button', { name: /search/i }).click();

    await expect(page.getByText(/no results/i)).toBeVisible();
  });

  test('should handle empty search input gracefully', async ({ page }) => {
    await page.getByRole('searchbox').fill('');
    await page.getByRole('button', { name: /search/i }).click();

    // Không crash, vẫn ở lại trang hoặc hiện thông báo
    await expect(page).not.toHaveURL(/error/i);
  });

  test('should trim whitespace and still return results', async ({ page }) => {
    await page.getByRole('searchbox').fill('   login   ');
    await page.getByRole('button', { name: /search/i }).click();

    const results = page.locator('.result-item');
    await expect(results).not.toHaveCount(0);
  });

  test('should be case-insensitive when searching', async ({ page }) => {
    await page.getByRole('searchbox').fill('LOGIN');
    await page.getByRole('button', { name: /search/i }).click();

    const results = page.locator('.result-item');
    await expect(results).not.toHaveCount(0);
  });

});
