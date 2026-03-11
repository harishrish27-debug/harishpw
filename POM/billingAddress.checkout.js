class billingAddress {
    constructor(page) {
        this.countryDD = page.locator('select#BillingNewAddress_CountryId')
        this.cityTB = page.locator('input#BillingNewAddress_City')
        this.address1TB = page.locator('input#BillingNewAddress_Address1')
        this.address2TB = page.locator('input#BillingNewAddress_Address2')
        this.zipTB = page.locator('input#BillingNewAddress_ZipPostalCode')
        this.mobileNumberTB = page.locator('input#BillingNewAddress_PhoneNumber')
        this.continueBtn = page.locator("//div[@id='billing-buttons-container']/input") // billing address
    }
}
export default billingAddress