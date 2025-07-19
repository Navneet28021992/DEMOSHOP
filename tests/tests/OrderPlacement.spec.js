// @ts-nocheck
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { DemoShop } from '../../data/data.json';
import { HomePage } from '../../pages/HomePage.js';
import { DesktopPage } from '../../pages/DesktopPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckOutPage } from '../../pages/CheckOutPage.js';
import { getTestData } from '../../utility/Excel.js'
const playwright = require('@playwright/test');
import { runBatchFile } from '../../utility/Excel.js'



/*test.beforeEach(async ({ page }) => {

  // Runs before each test and signs in each page.
  await page.goto('/'); 
});*/
[
  { length: 2552, width: 920 },
  { length: 1170, width: 676 },
].forEach(({ length, width }) => {
  test(`Order Placement ${length}`, async ({ page }) => {
    // Create context with given viewport
    await page.setViewportSize({ width: length, height: width });
    await page.goto('/');
    const data = await getTestData('DemoShop', 'TC_002')
    const login = new LoginPage(page)
    const homePage = new HomePage(page)
    const desktopPage = new DesktopPage(page)
    const cartPage = new CartPage(page)
    const checkOutPage = new CheckOutPage(page)

    //await login.login(DemoShop.username,DemoShop.password)
    await login.login(`${data['username']}`, `${data['password']}`)
    await homePage.goToComputers()
    await homePage.goToDesktops()

    //Validate Count of Desktop Computers
    let c = await desktopPage.countOfComputers()
    await expect(6).toEqual(c);

    await desktopPage.clickOnBuildYourOwnExpensiveComputer()
    await desktopPage.selectProcessor()
    await desktopPage.selectRAM()
    await desktopPage.selectHDD()
    await desktopPage.selectSoftware()
    // await desktopPage.enterQuantity(DemoShop.orderQuantity)
    await desktopPage.enterQuantity(`${data['orderQuantity']}`)
    await desktopPage.clickOnAddToCartBtn()
    await desktopPage.mouseHoverAndClickOnShopingCart()
    //await cartPage.selectCountry(DemoShop.country)
    await cartPage.selectCountry(`${data['country']}`)
    await cartPage.checkTermAndConditions()
    await cartPage.clickCheckoutBtn()
    //await checkOutPage.selectAddress(DemoShop.address)
    await checkOutPage.selectAddress(`${data['address']}`)
    await checkOutPage.clickBillingContinueBtn()
    await checkOutPage.clickShippingAddressContinueBtn()
    await checkOutPage.clickShippingMethodContinueBtn()
    await checkOutPage.clickPaymentMethodContinueBtn()
    await checkOutPage.clickPaymentInformationContinueBtn();
    await checkOutPage.clickConfirmBtn()

    //Success message validation on page
    let message = await checkOutPage.orderSucessMessage()
    console.log('Message on page is:', message)
    //expect(DemoShop.expectedMessage).toContain(message)
    expect(`${data['expectedMessage']}`).toContain(message)

    // Validate orderid on the page
    const orderid = await checkOutPage.getOrderId()
    console.log('Order id is:', orderid)
    expect(orderid).toBeTruthy()

  });
});
