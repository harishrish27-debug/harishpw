import { test } from "@playwright/test"
import loginsetup from "../utils/login.util.js"
import books from "../utils/bookPage.util.js"
test('IT02', async ({ page }) => {
    let log = new loginsetup()
    let checkBook = new books()
    await log.navigateURL(page)
    await log.LoginHelper(page)
    await checkBook.AssertBook(page)
    await log.logoutHelper(page)
})