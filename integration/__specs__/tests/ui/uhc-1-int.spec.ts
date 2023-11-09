import {Mock} from '@Core/mock';
import {CartPage} from '@Components/cartPage/cartPage';
import {GetCartItemsMock} from '@Mocks/api/mockio/v2/id/get';
import {screen} from "@testing-library/react";

describe('UHC-1-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Test title', async () => {
        await cartPage.fulfill();
        const cartList = await cartPage.getCartList();
        const cartItems = await cartList.getCartItems();

        reporter.startStep('Click Add Cart Item button');
            const modalAddItem = await cartPage.openModalAddItem();
            expect(await cartPage.isVisibleModal()).toBe(true);
        reporter.endStep();

        reporter.startStep('Fill form and create new cart item');
            await modalAddItem.fillInputs();
            await modalAddItem.clickCreate();

            const addedItem = await cartItems[0];
            expect(await addedItem.getTitleItem()).toBe("Ray Ban");
            expect(await addedItem.getPrice()).toBe(150);
            expect(await addedItem.getQuantity()).toBe(2);
            expect(await cartPage.isVisibleModal()).toBe(false);
        reporter.endStep();

        // reporter.startStep('Click on Delete button of last added item');
        //     await addedItem.deleteItem();
        // reporter.endStep();

        screen.debug()

    });
});
