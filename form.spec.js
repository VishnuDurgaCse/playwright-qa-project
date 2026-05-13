const { test, expect } = require("@playwright/test");

test.describe("Form Tests", () => {
  test("should fill and submit text box form", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").fill("Vishnu Durga");
    await page.locator("#userEmail").fill("vishnu@gmail.com");
    await page.locator("#currentAddress").fill("Bangalore, India");
    await page.locator("#permanentAddress").fill("Bangalore, India");
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.locator("#submit").click();
    await expect(page.locator("#output")).toBeVisible();
  });

  test("should display submitted name correctly", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").fill("Vishnu Durga");
    await page.locator("#userEmail").fill("vishnu@gmail.com");
    await page.locator("#currentAddress").fill("Bangalore, India");
    await page.locator("#permanentAddress").fill("Bangalore, India");
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.locator("#submit").click();
    await expect(page.locator("#output #name")).toContainText("Vishnu Durga");
  });

  test("should display submitted email correctly", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").fill("Vishnu Durga");
    await page.locator("#userEmail").fill("vishnu@gmail.com");
    await page.locator("#currentAddress").fill("Bangalore, India");
    await page.locator("#permanentAddress").fill("Bangalore, India");
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.locator("#submit").click();
    await expect(page.locator("#output #email")).toContainText(
      "vishnu@gmail.com",
    );
  });
});
