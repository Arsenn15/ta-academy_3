import { Component } from '@Core/component';
import { CartItem } from '@Components/cartPage/cartList/cartItem/cartItem';
import {fireEvent} from "@testing-library/react";

export class CartList extends Component {
    protected selectors = {
        cartItems: '[data-testid="cart-item"]',
        deleteButton: '//div[@class="cart__list"]/div[@class="cart-item"][1]//button[@data-testid="delete-btn"]',

    };

    public async getCartItems(): Promise<CartItem[]> {
        const cartItemsElements = await this.element.waitForQuerySelector(this.selectors.cartItems);
        const cartItems = cartItemsElements.map(item => new CartItem(item));
        return cartItems;
    }
    public async deleteItem (): Promise<void> {
        const [deleteButton] = await document.waitForXpath(this.selectors.deleteButton)
        fireEvent.click(deleteButton);
    }
}
