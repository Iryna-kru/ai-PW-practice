import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import users from '../fixtures/users.json';

test('User can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.goto();
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
   
    await expect(productPage.title).toBeVisible();

});

test('User cannot log in with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

     await loginPage.goto();
     await loginPage.login(
         users.invalidUser.username,
         users.invalidUser.password
     );

     await expect(loginPage.errorMessage)
     .toHaveText('Epic sadface: Username and password do not match any user in this service');


});