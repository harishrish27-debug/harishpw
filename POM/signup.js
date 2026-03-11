class signupUser {
    constructor(page) {
        this.maleGenderRadioBtn = page.locator('input#gender-male')
        this.femaleGenderRadioBtn = page.locator('input#gender-female')
        this.firstNameTF = page.locator('input#FirstName')
        this.lastNameTF = page.locator('input#LastName')
        this.emailTF = page.locator('input#Email')
        this.pwdTF = page.locator('input#Password')
        this.confirmPwdTF = page.locator('input#ConfirmPassword')
        this.registerBtn = page.locator('input#register-button')
        this.continueBtn = page.locator('//input[@value="Continue"]')
    }
}
export default signupUser