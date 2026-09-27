import { Page, Locator } from '@playwright/test';

export class CartPage {
     readonly page: Page;
     readonly backpackItem: Locator;

     constructor (page: Page) {
        this.page = page;
        this.backpackItem = page
        .locator('[data-test="inventory-item-name"]')
         .filter({ hasText: 'Sauce Labs Backpack' });

     }
}