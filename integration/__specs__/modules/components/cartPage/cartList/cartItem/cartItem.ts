import { Component } from '@Core/component';
import {fireEvent} from "@testing-library/react";

export class CartItem extends Component {
    protected selectors = {
        productName: '//h2',
        productPrice: './/div[contains(@class, "price-for-one")]',
        totalPrice: './/div[contains(@class, "fullprice")]',
        quantity: './/div[@data-testid="quantity-current"]',
        buttonAdd: './/button[text()="+"]',
        buttonDelete: '//button[@data-testid="delete-btn"]',
    };

    public async getPriceForAll(): Promise<number> {
        const [priceElement] = await this.element.waitForXpath(this.selectors.productPrice);
        return Number(priceElement.textContent.replace('$', ''));
    }

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.buttonAdd);
    }

    public async getPrice(): Promise<number> {
        const totalPrice = await this.getTotalPrice();
        const quantity = await this.getQuantity();
        return Number(totalPrice / quantity);
    }
    public async getTotalPrice(): Promise<number> {
        const [totalPrice] = await this.element.waitForXpath(this.selectors.totalPrice);
        return Number(totalPrice.textContent.replace('$', '').trim());
    }
    public async getQuantity(): Promise<number> {
        const [quantity] = await this.element.waitForXpath(this.selectors.quantity);
        return Number(quantity.textContent);
    }

    public async getTitleItem(): Promise<string | null> {
        const [productName] =await document.waitForXpath(this.selectors.productName);
       return  productName.textContent;
    }

    public async deleteItem (): Promise<void> {
        const [deleteButton] = await document.waitForXpath(this.selectors.buttonDelete)
         fireEvent.click(deleteButton);
    }

}
