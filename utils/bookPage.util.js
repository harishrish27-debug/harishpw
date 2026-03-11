import { expect } from "@playwright/test"
import tag from "../testdata/tag.data.json"
import category from "../POM/category"
import books from "../POM/books"
class bookpage {
    async AssertBook(page) {
        let cat = new category(page)
        let checkBook = new books(page)
        await cat.categoryBook.click()
        await checkBook.computerBook.click()
        let value = tag.bookTag
        expect(await checkBook.bookTag).toContainText(value)

    }
}
export default bookpage