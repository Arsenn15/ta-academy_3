import {Container} from "@Core/container";

export class LoginComponent extends Container {
    private LOCATORS = {
        createUHCGlassesAccountBtn: this.page.locator('//div[contains(@class,"bottomBlock__ctaButton")]'),
        popUpModalNavigation: this.page.locator('//div[contains(@class, "ReactModal__Content ReactModal__Content--after-open")]')
    };

    public async clickCreateUHCGlassesAccountBtn ():Promise<void>  {
      await  this.LOCATORS.createUHCGlassesAccountBtn.click();
    };
    public async isVisiblePopUp (): Promise<boolean> {
       return  await this.LOCATORS.popUpModalNavigation.isVisible();
    };
};
