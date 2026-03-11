import { test } from "@playwright/test"
import loginsetup from "../utils/login.util.js"
import cartSetup from "../utils/cart.util.js"
// Login as user, add the product to the cart, provide the details and click on checkout,
// click on Check / Money Order, provide the address and confirm the order, logout as user
test('E2E3', async ({ page }) => {
    let login = new loginsetup()
    let cart = new cartSetup()

    // launch the URL and login as user
    await login.navigateURL(page)
    await login.LoginHelper(page)

    // Search a product - smart phone
    // Click on the product
    // Add product to cart
    // click on shopping cart
    // assert the price
    await cart.searchHelper(page)
    await cart.addCartHelper(page)

    // check the checkbox and click on checkout
    // provide the address
    // Provide the payment method as check/money
    // click on continue
    // assert the msg
    // click on continue btn
    await cart.billAdd(page)
    await cart.shipAdd(page)
    await cart.shipMethGround(page)
    await cart.payMethCheck(page)
    await cart.payInfoMeth(page)
    await cart.confirmOrderMeth(page)
    await cart.thankPage(page)
    await login.logoutHelper(page)
})