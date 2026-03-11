import { test } from "@playwright/test"
import loginsetup from "../utils/login.util"
import cartSetup from "../utils/cart.util"
// Login as user, add the product to the cart, provide the details and click on checkout,
// click on Purchase Order, provide the address and confirm the order, logout as user
test('E2E6', async ({ page }) => {
    let login = new loginsetup()
    let cart = new cartSetup()

    await login.navigateURL(page)
    await login.LoginHelper(page)
    await cart.searchHelper(page)
    await cart.addCartHelper(page)
    await cart.billAdd(page)
    await cart.shipAdd(page)
    await cart.shipMethGround(page)
    await cart.payMethPO(page)
    await cart.payInfoMeth(page)
    await cart.confirmOrderMeth(page)
    await cart.thankPage(page)
    await login.logoutHelper(page)

})