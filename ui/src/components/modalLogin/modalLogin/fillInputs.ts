import { Component } from "@Core/component";

export enum inputType {
    firstName = "First Name",
    lastName = 'Last Name',
    emil = 'Email',
    password = 'Password',
}

export class FillInputs extends Component {
    private LOCATORS = {
        inputNavigation: async (placeholder: inputType) => {
            return await this.locator.locator(`//input[@placeholder="${placeholder}"]`);
        },
    };

    public async fillInput(inputType: inputType, inputText: string): Promise<void> {
        const inputElement = await this.LOCATORS.inputNavigation(inputType);
        await inputElement.fill(inputText);
    };

    public async fill() {
        await this.fillInput(inputType.firstName, 'Artur');
        await this.fillInput(inputType.lastName, 'Vardanyan');
        await this.fillInput(inputType.emil, `Vascsn${Math.random()}@gmail.com`);
        await this.fillInput(inputType.password, 'Ass778899');
    };

};
