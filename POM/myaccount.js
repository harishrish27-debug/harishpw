class myaccount {
    constructor(page) {
        this.firstNameTF = page.locator('input#FirstName')
        this.emailTF = page.locator('input#Email')
    }
}
export default myaccount