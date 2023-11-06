import {Container} from "@Core/container";

export class RegistrationPage extends Container {
    private LOCATORS = {
        firstNameInput: this.page.locator('//input[@id="input-4"]'),
        lastNameInput: this.page.locator('//input[@id="input-5"]'),
        emailInput: this.page.locator('//input[@id="input-6"]'),
        passwordInput: this.page.locator('//input[@id="input-7"]'),
        createNewCustomerBtn: this.page.locator('//button[@aria-label="Create new account"]'),
    };

    public async fillInputs(): Promise<void> {
        await this.LOCATORS.firstNameInput.type("Artur");
        await this.LOCATORS.lastNameInput.type("Vardanyan");
        await this.LOCATORS.emailInput.type(`Vascsn${Math.random()}@gmail.com`);
        await this.LOCATORS.passwordInput.type("Ajs12345");
    };

    public async clickCreateNewCustomerBtn (): Promise<void>{
        await this.LOCATORS.createNewCustomerBtn.click();
    };

};
