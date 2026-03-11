class books {
    constructor(page) {
        this.computerBook = page.locator("//a[text()='Computing and Internet']")
        this.bookTag = page.locator('//a[@href="/producttag/10/book"]')
    }
}
export default books