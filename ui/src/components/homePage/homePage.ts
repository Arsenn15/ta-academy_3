import { Container } from '@Core/container';
import { Header } from '@Components/homePage/homePage/header';
import { ModalLogIn } from "@Components/modalLogin/modalLogIn";
import { WelcomePopUp } from "@Components/welcomePopUp/welcomePopUp";
import {UserAccount} from "@Components/userAccount/userAccount";

export class HomePage extends Container {
    protected LOCATORS = {
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),
    };

    public Header = new Header(this.LOCATORS.header, this.page);
    public ModalLogIn = new ModalLogIn(this.LOCATORS.header, this.page);
    public welcomePopUp = new WelcomePopUp(this.LOCATORS.header, this.page);
    public userAccount = new UserAccount(this.LOCATORS.header,this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
