import { Page, Locator } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    readonly title: Locator;
    readonly addBackpackButton: Locator;
    readonly shoppingCart: Locator

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByText('Products', { exact: true });
        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCart= page.locator('[data-test="shopping-cart-link"]')
    }

    async addBackPackToCart() {
        await this.addBackpackButton.click();
    }

    async clickShoppingCart() {
        await this.shoppingCart.click();
    }

}
