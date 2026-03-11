import loginPage from "../POM/login.js"
import homepage from "../POM/home.js"
import logindata from "../testdata/signup.data.json"
import { expect } from "@playwright/test"
import myaccount from "../POM/myaccount.js"
let mail = logindata.email
let pwd = logindata.password``
let pageurl = logindata.url
class loginsetup {
    async LoginHelper(page) {
        let l = new loginPage(page)
        await l.emailTF.fill(mail)
        await l.pwdTF.fill(pwd)
        await l.loginBtn.click()
    }
    async assertUserMail(page) {
        let h = new homepage(page)
        let acc = new myaccount(page)
        let userMail = await h.userlink.textContent()
        expect(userMail).toBe(mail)
        await h.myaccountLink.click()
        let accMail = await acc.emailTF.inputValue()
        expect(accMail).toBe(mail)
    }
    async navigateURL(page) {
        let n = new homepage(page)
        await page.goto(pageurl)
        await n.loginLink.click()
    }
    async login(page) {
        let n = new homepage(page)
        await n.loginLink.click()
    }
    async logoutHelper(page) {
        let logout = new homepage(page)
        await logout.logoutLink.click()
    }
}
export default loginsetup
