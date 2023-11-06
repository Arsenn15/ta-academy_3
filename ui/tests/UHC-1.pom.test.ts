import {expect, test} from "@Test";

test.describe('UHC-1-pom', () => {
    test('Registration new customer with valid data and checking user data reset after logout', async ({page,
                                                         homePage,
                                                         registrationPage,
                                                         customerPage,
                                                         loginComponent,
                                                     }) => {
        await test.step('steps 1-5, Open Home page, do registration and sing out', async () => {
            await homePage.open();

            const navigation = homePage.Header.TopSide.MyAccountNavigation;
            await navigation.hoverMyAccount();
            await navigation.clickLogInBtn();

            expect(await loginComponent.isVisiblePopUp()).toBe(true);

            await loginComponent.clickCreateUHCGlassesAccountBtn();
            await registrationPage.fillInputs();
            await registrationPage.clickCreateNewCustomerBtn();

            await expect(async () => {
                expect(await customerPage.isVisibleWelcomePopUp()).toBe(true);
            }).toPass();

            await expect(async () => {
                expect(await customerPage.checkHelloCustomerName()).toBe("Welcome, Artur");
            }).toPass();

            await customerPage.closeBtn();
            await customerPage.hoverCustomerAccount();
            await customerPage.singOutBtn();
            expect(await navigation.checkAccount()).toBe("My Account");

        });
    });
});
