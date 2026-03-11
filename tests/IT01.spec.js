import { test } from "@playwright/test"
import loginsetup from "../utils/login.util"
import { log } from "node:console"
test('IT01', async ({ page }) => {
    // Login
    let login = new loginsetup()
    await login.navigateURL(page)
    await login.LoginHelper(page)
    await login.assertUserMail(page)
    await login.logoutHelper(page)
})