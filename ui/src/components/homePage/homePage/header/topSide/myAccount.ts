import { Component } from "@Core/component";

export class MyAccount extends Component {
    private LOCATORS = {
        myAccountNavigation: this.locator.locator('//div[contains(@class, "myAccount__accountContainer")]'),
        logInButtonNavigation: this.locator.locator('//li//button[normalize-space(text())="Log in"]'),
        myAccountTitleNavigation: this.locator.locator('//div[contains(@class, "myAccount__title")]')
    };

    public async hoverMyAccount(): Promise<void> {
        await this.LOCATORS.myAccountNavigation.hover({force: true});
    };

    public async clickLogInButton(): Promise<void> {
        await this.LOCATORS.logInButtonNavigation.click();
    };

    public async getMyAccountTitle(): Promise<string | null>{
        const title = this.LOCATORS.myAccountTitleNavigation.textContent();
        return await title;
    };
};
