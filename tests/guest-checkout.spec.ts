import { test, expect } from '@playwright/test';

test('Guest checkout - positive flow', async ({ page }) => {

  // 1. Open storefront
  await page.goto('https://www.shopware6-demo.development-s25.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveURL(/shopware6-demo/);

  // 2. Open product
  await page.goto(
    'https://www.shopware6-demo.development-s25.com/Demo-Produkt/SW10001',
    {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    }
  );

  // 3. Verify product page
  await expect(
    page.getByRole('button', { name: 'In den Warenkorb' })
  ).toBeVisible({ timeout: 15000 });

  // 4. Add product to cart
  await page.getByRole('button', { name: 'In den Warenkorb' }).click();

  // 5. Go to checkout
  await page.goto(
    'https://www.shopware6-demo.development-s25.com/checkout/confirm',
    {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    }
  );

  // 6. Fill guest information
  await page.locator('#billingAddress-personalFirstName').fill('Rosela');
  await page.locator('#billingAddress-personalLastName').fill('Test');
  await page.locator('#personalMail').fill('rosela.test@example.com');
  await page.locator('#billingAddress-AddressStreet').fill('22 Muharrem Fejza');
  await page.locator('#billingAddressAddressZipcode').fill('10000');
  await page.locator('#billingAddressAddressCity').fill('Prishtine');

  // 7. Continue
  await page.getByRole('button', { name: 'Weiter' }).click();

  // 8. Accept Terms & Conditions
  await page.locator('#tos').check();

  // 9. Place order
  await page.locator('#confirmFormSubmit').click();

  // 10. Wait for order confirmation page
  await page.waitForLoadState('domcontentloaded');

  console.log('FINAL URL:', page.url());

  // 11. Verify order confirmation page
  await expect(page).toHaveURL(/checkout\/finish/, {
    timeout: 30000
  });

});