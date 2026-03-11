class searchpage {
    constructor(page) {
        this.addToCart = page.locator('//input[@value="Add to cart"]')
        this.confirmMsg = page.locator('//input[@value="Add to cart"]')
        this.shoppinCartLink = page.locator("//a[text()='shopping cart']")
        this.actualpriceTxt = page.locator('//div[@class="prices"]/span')
        this.finalPriceTxt = page.locator('//span[@class="product-price order-total"]/strong')
    }
}
export default searchpage