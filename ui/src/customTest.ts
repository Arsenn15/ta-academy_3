import {test as base, expect} from '@playwright/test';
import {HomePage} from '@Components/homePage/homePage';
import {CategoryPage} from '@Components/categoryPage/categoryPage';
import type {Browser, Page} from '@playwright/test';
import {LoginComponent} from "@Components/loginComponent/loginComponent";
import {RegistrationPage} from "@Components/loginComponent/logInComponent/registrationNavigation/registrationPage";
import { CustomerPage } from "@Components/customerPage/customerPage";

export type Options = {
    browser: Browser;
    page: Page;
    baseURL: string;
    homePage: HomePage;
    categoryPage: CategoryPage;
    loginComponent: LoginComponent;
    registrationPage: RegistrationPage;
    customerPage: CustomerPage;
};

const test = base.extend<Options>({
    page: async ({page, context, baseURL}, use) => {
        await context.addCookies([
            {
                name: 'OptanonAlertBoxClosed',
                value: new Date().toISOString(),
                url: baseURL,
            },
        ]);
        await use(page);
    },
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    categoryPage: async ({page}, use) => {
        await use(new CategoryPage(page));
    },
    loginComponent: async ({page}, use) => {
        await use(new LoginComponent(page));
    },
    registrationPage: async ({page}, use) => {
        await use(new RegistrationPage(page));
    },
    customerPage: async ({page}, use) => {
        await use(new CustomerPage(page));
    },


});

export {test, expect};
