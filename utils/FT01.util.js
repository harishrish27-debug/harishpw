import { expect } from "@playwright/test"
import loginPage from "../POM/login.js"
import data from "../testdata/functionalTesting.data.json"
import home from "../POM/home.js"
import loginsetup from "../utils/login.util.js"
class FT {
    async assertLogin(page) {
        for (let x of data.valid) {
            let login = new loginPage(page)
            let logout = new loginsetup(page)
            let homepage = new home(page)
            await login.emailTF.fill(x.mailid)
            await login.pwdTF.fill(x.pwd)
            await login.loginBtn.click()
            expect(await homepage.loginSucces.textContent()).toBe(x.mailid) ?? console.log("Login Success");
            await logout.logoutHelper(page)
            await logout.login(page)
        }
        for (let y of data.invalid) {
            let login = new loginPage(page)
            let logout = new loginsetup(page)
            let homepage = new home(page)
            await login.emailTF.fill(y.mailid)
            await login.pwdTF.fill(y.pwd)
            await login.loginBtn.click()
            expect(await login.errormsg.textContent()).toBe('Login was unsuccessful. Please correct the errors and try again.') ?? console.log("Login Failed - Asertion Success")
            console.log("check the git conflict");
            
            // await logout.logoutHelper(page)
            // await logout.login(page)
        }

    }
}
export default FT