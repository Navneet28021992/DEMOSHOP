const { count } = require('console');

exports.DesktopPage=class DesktopPage {
    
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
      this.desktopList = page.locator('div.page.category-page > div.page-body > div.product-grid > div');
      this.buildYourComputer = page.getByText('Build your own expensive computer');
      this.processor = page.locator('#product_attribute_74_5_26_80:nth-child(1)');
      this.ram = page.locator('#product_attribute_74_6_27_84:nth-child(1)');
      this.hdd = page.locator('#product_attribute_74_3_28_87:nth-child(1)');
      this.software = page.locator('#product_attribute_74_8_29_88:nth-child(1)');
      this.quantity = page.locator('#addtocart_74_EnteredQuantity:nth-child(2)');
      this.addToCartBtn = page.locator('input[value="Add to cart"]:nth-child(4)');
      this.shopingCart = page.getByRole('link', { name: 'Shopping cart (2)' });
      this.addToCart = page.locator('.cart-button');

    }

    async countOfComputers() {
      let count=await this.desktopList.count()
      console.log('count of desktop is:',count)
      return count;
    }
    async clickOnBuildYourOwnExpensiveComputer() {
      await this.buildYourComputer.scrollIntoViewIfNeeded();
      await this.buildYourComputer.click()
    } 
    async selectProcessor() {
      await this.processor.click()
    } 
    async selectRAM() {
      await this.ram.click()
    }
    async selectHDD() {
      await this.hdd.click()
    }
    async selectSoftware() {
      await this.software.check()
    }
    async enterQuantity(quantityRequired) {
      await this.quantity.fill(quantityRequired)
    }
    async clickOnAddToCartBtn() {
      await this.addToCartBtn.click()
      await this.page.waitForTimeout(4000)
    }
    async mouseHoverAndClickOnShopingCart() {
      await this.shopingCart.hover()
      await this.addToCart.click()
    }                 
  }

