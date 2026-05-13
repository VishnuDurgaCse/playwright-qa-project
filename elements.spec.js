const { test, expect } = require("@playwright/test");

test.describe("Elements Tests", () => {
  test("should display dynamic properties", async ({ page }) => {
    await page.goto("https://demoqa.com/dynamic-properties");
    await expect(page.locator("#enableAfter")).toBeVisible();
  });

  test("should display upload download page", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");
    await expect(page.locator("#downloadButton")).toBeVisible();
  });

  test("should display web tables page", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    await expect(page.getByText("First Name")).toBeVisible();
  });
});
