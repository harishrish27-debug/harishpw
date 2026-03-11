class shippingMethod {
    constructor(page) {
        this.groundRadioBtn = page.locator('input#shippingoption_0')
        this.nextDayAirRadioBtn = page.locator('input#shippingoption_1')
        this.secondDayRadioBtn = page.locator('input#shippingoption_2')
        this.shippingContinueBtn = page.locator("//div[@id='shipping-method-buttons-container']/input") //Shipping method
    }
}
export default shippingMethod