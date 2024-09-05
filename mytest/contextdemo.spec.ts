import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { chromium, firefox, webkit } from 'playwright'

test('context demo', async () => {
    // Launch application
    const browser: Browser = await chromium.launch({ headless: false });

    // Browser 1
    const browser_context1: BrowserContext = await browser.newContext();
    const page1: Page = await browser_context1.newPage();
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId1: Locator = page1.locator("#input-email");
    const password1: Locator = page1.locator("#input-password");
    const loginButton1 = page1.locator("[value='Login']");
    await emailId1.fill("mytestuser@opencart.com");
    await password1.fill("playwright@123");
    await loginButton1.click();

    // Browser 2
    const browser_context2: BrowserContext = await browser.newContext();
    const page2: Page = await browser_context2.newPage();
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId2: Locator = page2.locator("#input-email");
    const password2: Locator = page2.locator("#input-password");
    const loginButton2 = page2.locator("[value='Login']");
    await emailId2.fill("mytestuser1@opencart.com");
    await password2.fill("playwright@123");
    await loginButton2.click();

    // Close browser contexts
    await browser_context1.close();
    await browser_context2.close();

    // Close the parent/main browser
    await browser.close();


});
