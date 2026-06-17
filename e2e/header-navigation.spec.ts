import { expect, test } from "@playwright/test";

test("header navigation links work correctly", async ({ page }) => {
  await page.goto("/");

  const headerNavigation = page.getByRole("navigation");

  await headerNavigation.getByRole("link", { name: /^shop$/i }).click();

  await expect(page).toHaveURL(/\/shop$/);

  await page.getByRole("link", { name: /wedding dress shop/i }).click();

  await expect(page).toHaveURL(/\/$/);

  await headerNavigation.getByRole("link", { name: /how it works/i }).click();

  await expect(page).toHaveURL(/#how-it-works$/);
  await expect(page.locator("#how-it-works")).toBeInViewport();

  await headerNavigation.getByRole("link", { name: /^contact$/i }).click();

  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#contact")).toBeInViewport();
});
