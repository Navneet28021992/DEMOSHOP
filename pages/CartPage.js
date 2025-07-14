exports.CartPage=class CartPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
      this.countryDropDown = page.locator('.country-input');
      this.termAndCondition = page.locator('#termsofservice');
      this.checkoutBtn = page.locator('#checkout:nth-child(2)');

    }

    async  selectCountry(name) {
        await this.countryDropDown.selectOption(name)
    }
    async  checkTermAndConditions() {
        await this.termAndCondition.check()
    }
    async  clickCheckoutBtn() {
        await this.checkoutBtn.click()
    }  
   
  }
