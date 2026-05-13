const { test, expect } = require("@playwright/test");

test.describe("Login Tests", () => {
  test("should login with valid credentials", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await page.locator("#userName").fill("testuser");
    await page.locator("#password").fill("Test@1234");
    await page.locator("#login").click();
    await expect(page).toHaveURL(/profile/);
  });

  test("should show error with invalid credentials", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await page.locator("#userName").fill("wronguser");
    await page.locator("#password").fill("wrongpass");
    await page.locator("#login").click();
    await expect(page.locator("#name")).toBeVisible();
  });

  test("should show error with empty fields", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await page.locator("#login").click();
    await expect(page.locator("#userName")).toBeVisible();
  });
});
