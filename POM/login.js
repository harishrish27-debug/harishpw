class loginPage {
    constructor(page) {
        this.emailTF = page.locator("input#Email")
        this.pwdTF = page.locator("input#Password")
        // this.loginBtn = page.locator("//input[@class='button - 1 login - button' and @value='Log in']")
        this.loginBtn = page.getByRole('button', { name: 'Log in' })
        this.errormsg = page.locator("//span[text()='Login was unsuccessful. Please correct the errors and try again.']")

    }
}
export default loginPage