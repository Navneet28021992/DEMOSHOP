exports.CheckOutPage = class CheckOutPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.billingAddressDropDown = page.locator('#billing-address-select:nth-child(1)');
        this.billingContinueBtn = page.locator('#billing-buttons-container > input');
        this.shippingAddressContinueBtn = page.locator('#shipping-buttons-container > input');
        this.shippingMethodContinueBtn = page.locator('#shipping-method-buttons-container > input');
        this.paymentMethodContinueBtn0 = page.locator('#payment-method-buttons-container > input');
        this.paymentInformationContinueBtn0 = page.locator('#payment-info-buttons-container > input');
        this.confirmBtn = page.locator('#confirm-order-buttons-container > input');
        this.orderSucess = page.locator('strong:has-text("Your order has been successfully processed!")');
        this.orderId = page.locator('div.page-body.checkout-data > div > ul > li:nth-child(1)');

    }

    async selectAddress(address) {
        await this.billingAddressDropDown.selectOption(address)
    }
    async clickBillingContinueBtn() {
        await this.billingContinueBtn.click()
    }
    async clickShippingAddressContinueBtn() {
        await this.shippingAddressContinueBtn.click()
    }
    async clickShippingMethodContinueBtn() {
        await this.shippingMethodContinueBtn.click()
    }
    async clickPaymentMethodContinueBtn() {
        await this.paymentMethodContinueBtn0.click()
    }
    async clickPaymentInformationContinueBtn() {
        await this.paymentInformationContinueBtn0.click()
    }
    async clickConfirmBtn() {
        await this.confirmBtn.click()
    }
    async orderSucessMessage() {
        return this.orderSucess.textContent()
    }
    async getOrderId() {
        const x = await (await this.orderId.innerText()).split(" ")
        return x[2]
    }

}
