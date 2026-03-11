import { test } from "@playwright/test"
import ft from "../testdata/functionalTesting.data.json"
import loginsetup from "../utils/login.util.js"
import assertLogin from "../utils/FT01.util.js"
test('FT01', async ({ page }) => {
    let login = new loginsetup()
    let check = new assertLogin()
    await login.navigateURL(page)
    await check.assertLogin(page)

})