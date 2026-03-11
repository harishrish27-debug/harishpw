import { expect, test } from "@playwright/test"
import loginsetup from "../utils/login.util.js"

// check login is working
test('smt 01', async ({ page }) => {
    let login = new loginsetup()
    await login.navigateURL(page)
    await login.LoginHelper(page)
})

// assertion should be in main scripting file