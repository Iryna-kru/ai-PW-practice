import { Page, Locator } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByText('Products', { exact: true });
    }

}
