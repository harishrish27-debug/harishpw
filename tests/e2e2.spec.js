import { expect, test } from "@playwright/test"
import loginsetup from "../utils/login.util"
import cartSetup from "../utils/cart.util"
//  Login as user, search for the product, click on product and add to the cart
//  navigate to cart provide the details and click on checkout and logout as user
test('E2E-2', async ({ page }) => {
    let login = new loginsetup()
    let cart = new cartSetup()
    await login.navigateURL(page)
    await login.LoginHelper(page)
    await cart.searchHelper(page)
    await cart.addCartHelper(page)
    await cart.billAdd(page)
    await cart.shipAdd(page)
    await cart.shipMethGround(page)
    await cart.payMethCOD(page)
    await cart.payInfoMeth(page)
    await cart.confirmOrderMeth(page)
    await cart.thankPage(page)
    await login.logoutHelper(page)


})