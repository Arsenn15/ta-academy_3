import { Component } from "@Core/component";
import { FillInputs } from "@Components/modalLogin/modalLogin/fillInputs";

export class ModalLogIn extends Component {
    private LOCATORS = {
        buttonCreateUHCGlassesAccountNavigation: this.page.locator('//div[contains(@class,"bottomBlock__ctaButton")]'),
        modalNavigation: this.page.locator('//div[contains(@class, "ReactModal__Content ReactModal__Content--after-open")]'),
        buttonCreateAccountNavigation: this.page.locator('//button[@aria-label="Create new account"]'),
    };
    public FillInputs = new FillInputs(this.LOCATORS.modalNavigation, this.page);


    public async isVisibleModal(): Promise<boolean> {
        return await this.LOCATORS.modalNavigation.isVisible();
    };

    public async clickCreateUHCGlassesAccountButton(): Promise<void> {
        await this.LOCATORS.buttonCreateUHCGlassesAccountNavigation.click();
    };

    public async clickButtonCreateAccount(): Promise<void> {
        await this.LOCATORS.buttonCreateAccountNavigation.click();
    };

};
