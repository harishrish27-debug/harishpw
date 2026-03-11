class category{
    constructor(page) {
        this.categoryBook = page.locator('//div[@class="listbox"]/descendant::a[@href="/books"]')
    }
}
export default category