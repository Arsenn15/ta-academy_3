import { Component } from "@Core/component";

export class WelcomePopUp extends Component {
    private LOCATORS = {
        modalWelcomePopUpNavigation: this.page.locator('//div[contains(@class, "rc-dialog-body")]'),
        titleWelcomePopUpNavigation: this.page.locator('//h2[contains(@class, "welcomePopup__title")]'),
        subtitleWelcomePopUpNavigationM: this.page.locator('//p[contains(@class, "welcomePopup__subtitle")]'),
        closeButtonNavigationM: this.page.locator('//button[@aria-label="Close"]'),
    };

    public async isVisibleWelcomePopUp(): Promise<boolean> {
        return await this.LOCATORS.modalWelcomePopUpNavigation.isVisible();
    };

    public async getTitleWelcomePopUp(): Promise<string | null> {
        const titleWelcomePopUp = this.LOCATORS.titleWelcomePopUpNavigation.textContent();
        return await titleWelcomePopUp;
    };

    public async getSubtitleWelcomePopUp(): Promise<string | null> {
        const subtitleWelcomePopUp = this.LOCATORS.subtitleWelcomePopUpNavigationM.textContent();
        return await subtitleWelcomePopUp
    };

    public async clickCloseButton(): Promise<void>{
        await this.LOCATORS.closeButtonNavigationM.click();
    };
};
