import { expect, test } from "@playwright/test";

test("footer navigation links work correctly", async ({ page }) => {
  await page.goto("/");

  const footer = page.locator("footer");

  await footer.getByRole("link", { name: /^shop$/i }).click();

  await expect(page).toHaveURL(/\/shop$/);

  await footer.getByRole("link", { name: /^about$/i }).click();

  await expect(page).toHaveURL(/\/#about$/);
  await expect(page.locator("#about")).toBeInViewport();

  await footer.getByRole("link", { name: /^how it works$/i }).click();

  await expect(page).toHaveURL(/\/#how-it-works$/);
  await expect(page.locator("#how-it-works")).toBeInViewport();

  await footer.getByRole("link", { name: /^contact$/i }).click();

  await expect(page).toHaveURL(/\/#contact$/);
  await expect(page.locator("#contact")).toBeInViewport();
});
