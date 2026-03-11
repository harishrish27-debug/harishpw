class paymentMethod {
    constructor(page) {
        this.CODRadioBtn = page.locator('input#paymentmethod_0')
        this.checkRadioBtn = page.locator('input#paymentmethod_1')
        this.CreditRadioBtn = page.locator('input#paymentmethod_2')
        this.purchaseRadioBtn = page.locator('input#paymentmethod_3')
        this.paymentContinueBtn = page.locator("//div[@id='payment-method-buttons-container']/input") //payment method
    }
}
export default paymentMethod