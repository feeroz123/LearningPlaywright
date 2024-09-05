import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async () => {
    // Launch application
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // Locators
    const emailId: Locator = page.locator("#input-email");
    const password: Locator = page.locator("#input-password");
    const loginButton = page.locator("[value='Login']");

    // Actions
    await emailId.fill("mytestuser@opencart.com");
    await password.fill("playwright@123");
    await loginButton.click();

    // Capture the page title
    const title = await page.title();
    console.log("Home Page title: " + title);

    // Take screenshot
    await page.screenshot({ path: 'screenshots/homepage.png' });

    // Assertion
    expect(title).toEqual('My Account');

    // Close browser
    await browser.close();

});

