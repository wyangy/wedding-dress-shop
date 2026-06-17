import { expect, test } from "@playwright/test";

test("user can request a fitting for a dress", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /find the dress that feels like you/i,
    })
  ).toBeVisible();

  const headerNavigation = page.getByRole("navigation");

  await headerNavigation.getByRole("link", { name: /^shop$/i }).click();

  await expect(page).toHaveURL(/\/shop$/);

  await page
    .getByRole("link", { name: /view details/i })
    .first()
    .click();

  await expect(page).toHaveURL(/\/dresses\/\d+$/);

  await page.getByRole("link", { name: /request a fitting/i }).click();

  await expect(page).toHaveURL(/\/request-fitting\/\d+$/);

  await page.getByLabel(/^name$/i).fill("Jane Bride");
  await page.getByLabel(/^email$/i).fill("jane@example.com");
  await page.getByLabel(/^phone$/i).fill("+64 21 123 4567");

  await page
    .getByLabel(/^message$/i)
    .fill("I would like to request a fitting.");

  await page.getByRole("button", { name: /submit request/i }).click();

  await expect(
    page.getByText(/your fitting request has been received/i)
  ).toBeVisible();
});
