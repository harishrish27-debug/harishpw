class paymentInfo {
    constructor(page) {
        // COD
        this.checkCOD = page.locator("//p[text()='You will pay by COD']")
        // credit card
        this.checkCreditCard = page.locator("//label[text()='Select credit card']")
        this.selectCreditCardDD = page.locator('select#CreditCardType')
        this.expiryMonthDD = page.locator('select#ExpireMonth')
        this.expiryYearDD = page.locator('select#ExpireYear')
        this.cardHolderName = page.locator('input#CardholderName')
        this.cardNumber = page.locator('input#CardNumber')
        this.cardCode = page.locator('input#CardCode')

        // PO
        this.PoNumber = page.locator('input#PurchaseOrderNumber')

        // check payment
        this.checkPaymentMsg = page.locator("//p[contains(text(),'Mail Personal or Business Check')]") //PO

        // confirm button
        this.confirmationContinueBtn = page.locator("//div[@id='payment-info-buttons-container']/input") //payment information
    }
}
export default paymentInfo