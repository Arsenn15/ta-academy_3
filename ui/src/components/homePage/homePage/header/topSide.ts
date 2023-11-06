import {Component} from "@Core/component";
import {MyAccountNavigation} from "@Components/homePage/homePage/header/topSide/myAccountNavigation";

export class TopSide extends Component {
    protected LOCATORS = {
        myAccount: this.locator.locator('//div[contains(@class, "topStripMenu__menu___mVIts topStripMenu__dHelpCenterUHCG")]'),
    };

    public MyAccountNavigation = new MyAccountNavigation(this.LOCATORS.myAccount, this.page);
}
