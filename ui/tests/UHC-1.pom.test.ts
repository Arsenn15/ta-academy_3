import { expect, test } from "@Test";

test.describe('UHC-1-pom', () => {
    test('Registration new customer with valid data and checking user data reset after logout', async ({homePage,}) => {

        const myAccount = homePage.Header.TopSide.MyAccount;
        const modalLogIn = homePage.ModalLogIn;

        await test.step('steps 1, Open Home page, Hover on ‘My Account’ button and click on ‘Log In’ button', async () => {
            await homePage.open();
            await myAccount.hoverMyAccount();
            await myAccount.clickLogInButton();
            await expect(async () => {
                expect(await modalLogIn.isVisibleModal()).toBe(true);
            }).toPass();
        });

        await test.step('steps 2 Click on ‘Create UHCGlasses.com Account’ button', async () => {
            await modalLogIn.clickCreateUHCGlassesAccountButton();
            await expect(async () => {
                expect(await modalLogIn.isVisibleModal()).toBe(true);
            }).toPass();
        });

        const welcomePopUp = homePage.welcomePopUp;
        const fillInputs = homePage.ModalLogIn.FillInputs;

        await test.step('steps 3 Click on ‘Create UHCGlasses.com Account’ button', async () => {
            await fillInputs.fill();
            await modalLogIn.clickButtonCreateAccount();
            await expect(async () => {
                expect(await modalLogIn.isVisibleModal()).toBe(false);
                expect(await welcomePopUp.isVisibleWelcomePopUp()).toBe(true);
                expect(await welcomePopUp.getTitleWelcomePopUp()).toBe('Welcome, Artur');
                expect(await welcomePopUp.getSubtitleWelcomePopUp()).toBe('You can start enjoying everything we have to offer');
            }).toPass();
        });

        const userAccount = homePage.userAccount;

        await test.step('steps 4 Click on ‘Close’ button of ‘Welcome popup’ modal', async () => {
            await welcomePopUp.clickCloseButton();
            await expect(async () => {
                expect(await welcomePopUp.isVisibleWelcomePopUp()).toBe(false);
                expect(await userAccount.getHelloUserName()).toBe('Hello, Artur');
            }).toPass();
        });
        await test.step('steps 5 Hover on ‘My account’ dropdown and click on ‘Sign out’ button', async () => {
            await userAccount.hoverUserNameAccount();
            await userAccount.clickSignOutButton();
            await expect(async () => {
                expect(await myAccount.getMyAccountTitle()).toBe('My Account');
            }).toPass();
        });

    });
});
