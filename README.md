# QA Automation - Shopware 6

This project automates the positive guest checkout flow for the Shopware 6 demo storefront using Playwright.

## Environment

https://www.shopware6-demo.development-s25.com/

## Test Flow

The automated test covers the complete guest checkout flow:

1. Open the storefront
2. Open a product
3. Add the product to the cart
4. Go to checkout
5. Checkout as a guest
6. Fill in customer and address information
7. Accept the Terms and Conditions
8. Place the order
9. Verify the order confirmation page

## Setup

Install the project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run the Test

Run the automated test:

```bash
npx playwright test
```

Run the test with the browser visible:

```bash
npx playwright test --headed
```

## Improvements

If I had more time, I would:

* Add negative and edge-case test scenarios
* Use the Page Object Model for better code organization
* Improve test data management
* Add screenshots and traces for failed tests
* Set up CI/CD with GitHub Actions
* Add more checkout and payment test scenarios
