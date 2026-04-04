const { test, expect } = require('@playwright/test');

// Update BASE_URL follow real project
const BASE_URL = 'https://your-shop.example.com';

test.describe('Checkout feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/cart`);
  });

  test('should display checkout button when cart has items', async ({ page }) => {
<<<<<<< HEAD
    // Assume that already have item on cart
=======
    // Giả sử đã có sản phẩm trong giỏ hàng
>>>>>>> 22df464698553ba14d31a45ac0e0e8e19b2db11c
    const checkoutBtn = page.getByRole('button', { name: /checkout/i });
    await expect(checkoutBtn).toBeVisible();
  });

  test('should navigate to checkout page when clicking checkout button', async ({ page }) => {
    await page.getByRole('button', { name: /checkout/i }).click();
    await expect(page).toHaveURL(/checkout/i);
  });

  test('should show order summary on checkout page', async ({ page }) => {
    await page.getByRole('button', { name: /checkout/i }).click();

    const orderSummary = page.locator('.order-summary'); // cập nhật selector theo UI
    await expect(orderSummary).toBeVisible();
  });

  test('should require shipping information before placing order', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);

<<<<<<< HEAD
    // Press Place Order incase form = blank → Need validation
=======
    // Bấm Place Order mà chưa điền form → phải có validation
>>>>>>> 22df464698553ba14d31a45ac0e0e8e19b2db11c
    await page.getByRole('button', { name: /place order/i }).click();
    await expect(page.getByText(/required/i)).toBeVisible();
  });

  test('should show confirmation page after successful checkout', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`);

<<<<<<< HEAD
    // Fill require fields
=======
    // Điền thông tin giao hàng tối thiểu
>>>>>>> 22df464698553ba14d31a45ac0e0e8e19b2db11c
    await page.getByLabel(/full name/i).fill('Test User');
    await page.getByLabel(/address/i).fill('123 Test Street');
    await page.getByLabel(/city/i).fill('Hanoi');

    await page.getByRole('button', { name: /place order/i }).click();

    await expect(page).toHaveURL(/confirmation|success/i);
    await expect(page.getByText(/order confirmed/i)).toBeVisible();
  });

});
