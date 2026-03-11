class cartPage{
    constructor(page) {
        this.countryDD = page.locator('select#CountryId')
        this.stateDD = page.locator('select#StateProvinceId')
        this.termAndConditionCB = page.locator('input#termsofservice')
        this.chekoutBtn = page.locator('button#checkout')
    }
}
export default cartPage