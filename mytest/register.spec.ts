import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('register account test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // Locators
    const firstName: Locator = page.locator("#input-firstname");
    const lastName: Locator = page.locator("#input-lastname");
    const email: Locator = page.locator("#input-email");
    const telephone: Locator = page.locator("#input-telephone");
    const password: Locator = page.locator("#input-password");
    const passwordConfirm: Locator = page.locator("#input-confirm");
    const privacyPolicy: Locator = page.locator("[name='agree']");
    const continueButton: Locator = page.locator("[value='Continue']");

    // Actions
    const prefix = Math.floor(Math.random() * 900) + 100;
    await firstName.fill("My Test User ");
    await lastName.fill("User " + prefix);
    await email.fill("mytestuser" + prefix + "@opencart.com");
    await telephone.fill("0123456789");
    await password.fill("playwright@123");
    await passwordConfirm.fill("playwright@123");
    await privacyPolicy.click();
    await continueButton.click();

    // Assert page title
    const title: String = await page.title();
    expect(title).toEqual("Your Account Has Been Created!");

    // Close the browser
    const screenshotPath = prefix ? "screenshots/register" + prefix + ".png" : "screenshots/register.png"
    console.log("Screenshot Path: " + screenshotPath);
    await page.screenshot({ path: screenshotPath });
    await page.close();

});