import type {Options} from '@Test';
import {test, expect} from '@Test';

test.describe('UHC-1 (test ID)', () => {
    test('Registration new customer with valid data and checking user data reset after logout(test title)', async ({
                                                                                                                       page,
                                                                                                                       baseURL,
                                                                                                                   }: Options) => {
        await page.goto(baseURL, {waitUntil: 'domcontentloaded'});

        const myAccountBtn = page.locator('//div[@class="myAccount__myAccountMenu___2mbVE"]');
        await myAccountBtn.hover({force: true});

        const logInBtn = page.locator('//li[button[@type=\'button\']]');
        await logInBtn.click();

        const CreateUHCGlassesAccountBtn = page.locator("//div[contains(@class, 'bottomBlock__ctaButton___1-zsM')]");
        await CreateUHCGlassesAccountBtn.click();

        await expect(async () => {
            expect( await page.locator("//div[@class=\"ReactModal__Content ReactModal__Content--after-open\"]").isVisible()).toBe(true);
        }).toPass();

        const inputFirstName = page.locator('//input[@id=\'input-4\']');
        await inputFirstName.type('Artur');

        const inputLastName = page.locator('//input[@id=\'input-5\']');
        await inputLastName.type('Varanyan');

        const inputEmail = page.locator('//input[@id=\'input-6\']');
        await inputEmail.type(`Vascsn${Math.random()}@gmail.com`);

        const inputPassword = page.locator('//input[@id=\'input-7\']');
        await inputPassword.type('Var778899');

        const registrationBtn = page.locator('//button[@aria-label=\'Create new account\']');
        await registrationBtn.click();

        await expect(async () => {
            const welcomeUserNameLocator = await page.locator("//h2[@class='welcomePopup__title___2jM45']").textContent();
            expect(welcomeUserNameLocator).toStrictEqual("Welcome, Artur");
        }).toPass();

        const closeBtn = page.locator('//button[@aria-label=\'Close\']');
        await closeBtn.click();

        await expect(async () => {
            const UserNameLocator = await page.locator('//div[@class=\'myAccount__title___3VN4o\']').textContent();
            expect(UserNameLocator).toStrictEqual("Hello, Artur");
        }).toPass();

        const HelloUserNameBtn = page.locator('//div[@class=\'myAccount__title___3VN4o\']');
        await HelloUserNameBtn.hover({force: true});

        const logOutBtn = page.locator('//li[button[contains(text(), \'Sign out\')]]');
        await logOutBtn.click();

        await expect(async () => {
            const myAccountLocator = await page.locator('//div[@class=\'myAccount__title___3VN4o\']').textContent();
            expect(myAccountLocator).toStrictEqual("My Account");
        }).toPass();
    });
});
