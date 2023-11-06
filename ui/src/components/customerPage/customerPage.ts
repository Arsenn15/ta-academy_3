import {Container} from "@Core/container";

export class CustomerPage extends Container {
    private LOCATORS = {
        welcomePopUp: this.page.locator('//div[contains(@class, "rc-dialog-body")]'),
        customerAccount: this.page.locator('//div[contains(@class, "myAccount__myAccountMenu")]'),
        closeBtnNavigation: this.page.locator('//button[contains(@class, "rc-dialog-close")]'),
        singOutNavigation: this.page.locator('//li/button[text()="Sign out"]')
    };



    public async isVisibleWelcomePopUp ():Promise<boolean>  {
        return  await  this.LOCATORS.welcomePopUp.isVisible();
    };

    public async closeBtn (): Promise<void>{
        await this.LOCATORS.closeBtnNavigation.click();
    };

    public async hoverCustomerAccount (): Promise<void> {
        await this.LOCATORS.customerAccount.hover({force: true});
    };
    public async singOutBtn (): Promise<void>{
        await this.LOCATORS.singOutNavigation.click();
    };
};
