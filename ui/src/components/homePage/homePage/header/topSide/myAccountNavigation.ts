import { Component } from "@Core/component";
import {expect} from "@Test";

export class MyAccountNavigation extends Component {
    private LOCATORS = {
        logInBtnNavigation:  this.locator.locator('//li//button[normalize-space(text())="Log in"]'),
        myAccountNavigation: this.locator.locator('//div[contains(@class, "myAccount__accountContainer")]'),
        myAccountTitleNavigation: this.locator.locator('//div[contains(@class,"myAccount__title")]')
};
    public async hoverMyAccount (): Promise<void>{
        await this.LOCATORS.myAccountNavigation.hover({force:true});
    }
    public async clickLogInBtn(): Promise<void>{
        await this.LOCATORS.logInBtnNavigation.click();
    };
    public async checkAccount(): Promise<string|null>{
        const myAccountText = await this.LOCATORS.myAccountTitleNavigation.textContent();
        return myAccountText;
    };
};
