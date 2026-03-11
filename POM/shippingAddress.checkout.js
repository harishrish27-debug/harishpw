class shippingAddress {
    constructor(page) {
        this.inStorePickupCheckbox = page.locator('input#PickUpInStore')
        this.shippingAddContinueBtn = page.locator('//div[@id="shipping-buttons-container"]/input') // Shipping address
    }
}
export default shippingAddress