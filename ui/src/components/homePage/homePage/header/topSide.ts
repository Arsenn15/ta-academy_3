import { Component } from "@Core/component";
import { MyAccount } from "@Components/homePage/homePage/header/topSide/myAccount";

export class TopSide extends Component {
    protected LOCATORS = {
        myAccountNavigation: this.locator.locator('//div[contains(@class, "topStripMenu__menu___mVIts topStripMenu__dHelpCenterUHCG")]'),
    };

    public MyAccount = new MyAccount(this.LOCATORS.myAccountNavigation, this.page);
}
