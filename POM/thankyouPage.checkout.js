class thankyouPage {
    constructor(page) {
        this.msg = page.locator('//div[@class="title"]/strong')
        this.ordercontinueBtn = page.locator('//div[@class="buttons"]/input')
    }
}
export default thankyouPage