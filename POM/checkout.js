class checkoutPage {
    constructor(page) {
        this.countryDD = page.locator('select#BillingNewAddress_CountryId')
        this.cityTB = page.locator('input#BillingNewAddress_City')
        this.address1TB = page.locator('input#BillingNewAddress_Address1')
        this.address2TB = page.locator('input#BillingNewAddress_Address2')
        this.zipTB = page.locator('input#BillingNewAddress_ZipPostalCode')
        this.mobileNumberTB = page.locator('input#BillingNewAddress_PhoneNumber')
        this.continueBtn = page.locator("//div[@id='billing-buttons-container']/input")
        this.shippingAddContinueBtn = page.locator('//div[@id="shipping-buttons-container"]/input')
        this.groundRadioBtn = page.locator('input#shippingoption_0')
        this.nextDayAirRadioBtn = page.locator('input#shippingoption_1')
        this.secondDayRadioBtn = page.locator('input#shippingoption_2')
        this.shippingContinueBtn = page.locator("//div[@id='shipping-method-buttons-container']/input")
        this.CODRadioBtn = page.locator('input#paymentmethod_0')
        this.checkRadioBtn = page.locator('input#paymentmethod_1')
        this.CreditRadioBtn = page.locator('input#paymentmethod_2')
        this.purchaseRadioBtn = page.locator('input#paymentmethod_3')
        this.paymentContinueBtn = page.locator("//div[@id='payment-method-buttons-container']/input")
        this.confirmationContinueBtn = page.locator("//div[@id='payment-info-buttons-container']/input")
        this.confirmOrderBtn = page.locator('//div[@id="confirm-order-buttons-container"]/input')
        this.msg = page.locator('//div[@class="title"]/strong')
        this.orderCompleteBtn = page.locator('//input[@value="Confirm"]')
        this.ordercontinueBtn = page.locator('//div[@class="buttons"]/input')
    }
}
export default checkoutPage