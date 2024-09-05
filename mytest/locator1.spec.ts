import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('locator 1 test', async () => {
    // Launch application
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //Locators
    //1. ID
    const firstName: Locator = page.locator("id=input-firstname");
    await firstName.fill("Test Automation");

    //2. Class Name
    const logo: Locator = page.locator(".img-responsive");
    const logoExists = await logo.isEnabled()
    console.log(logoExists);

    //3. Text
    const headerText: Locator = page.locator("text=Register Account");
    const headerTextContent = await headerText.innerText();
    console.log(headerTextContent);

    //4. CSS
    const email: Locator = page.locator("css=input#input-email");
    const telephone: Locator = page.locator("input[name='telephone']");
    const privacyPolicy: Locator = page.locator("input[type='checkbox']");
    await email.fill("test@test.com");
    await telephone.fill("1234567890");
    await privacyPolicy.click();

    //5.XPATH
    const password: Locator = page.locator("//input[@id='input-password']");
    await password.fill("myPassword");

    // await page.getByTestId('username').fill("user123"); // To use a custom locator


    await new Promise(() => {});  // Empty promise to prevent script from exiting --OPTIONAL

});