import { expect, test } from "@playwright/test"
import loginsetup from "../utils/login.util.js"
import home from "../POM/home.js"
test('', async ({ page }) => {
    let login = new loginsetup()
    let homePage = new home(page)
    await login.navigateURL(page)
    await homePage.emailTF.fill("edith@gmail.com")
    await homePage.subscribeBtn.click()
    await expect(homePage.thankyouMsg).toHaveText(/Thank you/)
})