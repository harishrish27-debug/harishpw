import { expect, test } from "@playwright/test"
import signupPage from "../POM/signup.js"
import homePage from "../POM/home.js"
import userData from "../testdata/signup.data.json"
import myaccount from "../POM/myaccount.js"
// Navigate to the application, register a new user login as user, 
// goto profile page check the user details and logout as user
test('E2E1', async ({ page }) => {
    //creating instance
    let home = new homePage(page)
    let signup = new signupPage(page)
    let accountpage = new myaccount(page)

    // store the data from json
    let pageURL = userData.url
    let fn = userData.firstname
    let ln = userData.lastname
    let email = userData.email
    let pwd = userData.password
    let confirmPwd = userData.confirmpassword
    let registerUrl = userData.registerSuccesspageURL
    let homepageURL = userData.homepageURL

    // launch the URl
    await page.goto(pageURL)
    // click on register link
    await home.registerLink.click()
    // select gender
    await signup.maleGenderRadioBtn.check()
    // enter first name
    await signup.firstNameTF.fill(fn)
    // enter last name
    await signup.lastNameTF.fill(ln)
    // enter mail
    await signup.emailTF.fill(email)
    // enter password
    await signup.pwdTF.fill(pwd)
    // enter confirm password
    await signup.confirmPwdTF.fill(confirmPwd)
    // click on register button
    await signup.registerBtn.click()

    //capture the confirmation message
    // await page.screenshot() -> check the code
    // assert the register success
    await expect(page).toHaveURL(/registerresult/)
    // click on continue button
    await signup.continueBtn.click()
    // assert the page is navigating to home page
    await expect(page).toHaveURL(/tricentis.com/)
    // click on my account
    await home.myaccountLink.click()
    // assert the username
    await expect(page).toHaveURL(/customer/)
    let firstname = await accountpage.firstNameTF.getAttribute('value')
    expect(firstname).toBe(fn)

    //click on logout
    await home.logoutLink.click()
})