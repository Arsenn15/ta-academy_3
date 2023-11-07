import { Component } from "@Core/component";

export class UserAccount extends Component {
    private LOCATORS = {
        helloUserNameNavigation: this.locator.locator('//div[contains(@class,"myAccount__title")]'),
        userNameAccountNavigation: this.locator.locator('//div[contains(@class, "myAccount__myAccountMenu")]'),
        signOutButtonNavigation: this.locator.locator('//li[button[contains(text(), "Sign out")]]'),
    };

    public async getHelloUserName(): Promise<string | null>{
        const helloUserName = this.LOCATORS.helloUserNameNavigation.textContent();
        return await helloUserName;
    };


    public async hoverUserNameAccount(): Promise<void> {
        await this.LOCATORS.userNameAccountNavigation.hover({force: true});
    };

    public async clickSignOutButton(): Promise<void> {
        await this.LOCATORS.signOutButtonNavigation.click();
    };
};
