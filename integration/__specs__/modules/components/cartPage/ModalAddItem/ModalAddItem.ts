import {Component} from '@Core/component';
import {fireEvent} from "@testing-library/react";
import {CartItem} from "@Components/cartPage/cartList/cartItem/cartItem";
import userEvent from "@testing-library/user-event";

export class ModalAddItem extends Component {
    protected selectors = {
        name: '//input[@name="name"]',
        price: '//input[@name="price"]',
        quantity: '//input[@name="quantity"]',
        buttonCreate: '//button[contains(@class, "btn")  and text()="Create"]',
        cartItem: '[data-testid="cart-item"]',
    };

    public async fillInputs(): Promise<void> {
        const [name] = await document.waitForXpath(this.selectors.name);
        const [price] = await document.waitForXpath(this.selectors.price);
        const [quantity] = await document.waitForXpath(this.selectors.quantity);

        fireEvent.change(name, { target: { value: 'Ray Ban' } });
        fireEvent.change(price, { target: { value: 150 } });
        fireEvent.change(quantity, { target: { value: 2 } });
    };

    public async clickCreate(): Promise<void> {
        const [buttonCreate] = await document.waitForXpath(this.selectors.buttonCreate);
        fireEvent.click(buttonCreate);

    };
};
