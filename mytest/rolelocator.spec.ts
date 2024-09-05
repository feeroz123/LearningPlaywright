import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Role Locator test', async () => {
    // Launch application
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'})
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // Role locator
    await expect(page.getByRole("heading", {name: 'Register Account'})).toBeVisible();
    await expect(page.getByRole("link", {name: 'Forgotten Password'})).toBeVisible();
    await expect(page.getByRole("radio", {name: 'Yes'})).toBeVisible();
    await page.getByRole("radio", {name: 'Yes'}).click();

    await expect(page.getByRole("checkbox")).toBeVisible();
    await page.getByRole("checkbox").click();

    await expect(page.getByRole("button", {name: 'Continue'})).toBeVisible();
    await page.getByRole("button", {name: 'Continue'}).click();

    await page.waitForTimeout(3000);  // Wait function
});


