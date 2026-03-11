import { expect } from "@playwright/test"
import homepage from "../POM/home.js"
import searchpage from "../POM/search.js"
import cartPage from "../POM/cart.js"
import billingAddress from "../POM/billingAddress.checkout.js"
import shippingAddress from "../POM/shippingAddress.checkout.js"
import shippingMethod from "../POM/shipingMethod.checkout.js"
import paymentMethod from "../POM/paymentMethod.checkout.js"
import paymentInfo from "../POM/paymentInfo.checkout.js"
import thankyouPage from "../POM/thankyouPage.checkout.js"
import confirmOrder from "../POM/confirmOrder.checkout.js"
import cartData from "../testdata/signup.data.json"
import checkoutdata from "../testdata/checkout.data.json"

let search = cartData.search
let checkMsg = checkoutdata.checkPayMsg
let creditcardHolderName = checkoutdata.cardHolderName
let creditcardNumber = checkoutdata.cardNumber
let PONumber = checkoutdata.PONumber
let msg = checkoutdata.successmsg
let city = checkoutdata.city
let add1 = checkoutdata.address1
let add2 = checkoutdata.address2
let post = checkoutdata.zip
let phonenumber = checkoutdata.phonenumber

class cartSetup {
    async searchHelper(page) {
        let home = new homepage(page)
        await home.searchTB.fill(search)
        await home.searchBtn.click()

    }
    async addCartHelper(page) {
        let search = new searchpage(page)
        let cart = new cartPage(page)
        await search.addToCart.click()
        await search.shoppinCartLink.click()
        await cart.termAndConditionCB.check()
        await cart.chekoutBtn.click()
    }
    async billAdd(page) {
        let billAdd = new billingAddress(page)
        if (!(await billAdd.countryDD.isVisible())) {
            await billAdd.continueBtn.click()
        }
        else {
            await billAdd.countryDD.selectOption('India')
            await billAdd.cityTB.fill(city)
            await billAdd.address1TB.fill(add1)
            await billAdd.address2TB.fill(add2)
            await billAdd.zipTB.fill(post)
            await billAdd.mobileNumberTB.fill(phonenumber)
            await billAdd.continueBtn.click()
        }
    }
    async shipAdd(page) {
        let shipAdd = new shippingAddress(page)
        await shipAdd.shippingAddContinueBtn.click()
    }
    async shipMethGround(page) {
        let shipMeth = new shippingMethod(page)
        await shipMeth.groundRadioBtn.check()
        await shipMeth.shippingContinueBtn.click()
    }
    async shipMethNextDayAir(page) {
        let shipMeth = new shippingMethod(page)
        await shipMeth.nextDayAirRadioBtn.check()
        await shipMeth.shippingContinueBtn.click()
    }
    async shipMethSecDayAir(page) {
        let shipMeth = new shippingMethod(page)
        await shipMeth.secondDayRadioBtn.check()
        await shipMeth.shippingContinueBtn.click()
    }
    async payMethCOD(page) {
        let payment = new paymentMethod(page)
        await payment.CODRadioBtn.click()
        await payment.paymentContinueBtn.click()
    }
    async payMethCheck(page) {
        let payment = new paymentMethod(page)
        await payment.checkRadioBtn.click()
        await payment.paymentContinueBtn.click()
    }
    async payMethCredit(page) {
        let payment = new paymentMethod(page)
        await payment.CreditRadioBtn.click()
        await payment.paymentContinueBtn.click()
    }
    async payMethPO(page) {
        let payment = new paymentMethod(page)
        await payment.purchaseRadioBtn.click()
        await payment.paymentContinueBtn.click()
    }
    async payInfoMeth(page) {
        let payInfo = new paymentInfo(page)
        if (await payInfo.checkPaymentMsg.isVisible()) {
            await payInfo.confirmationContinueBtn.click()
        }
        // else if (await payInfo.selectCreditCardDD.isVisible() && await waitForSelector(payInfo.selectCreditCardDD)) {
        else if (await page.waitForSelector(payInfo.selectCreditCardDD)) {
            await payInfo.selectCreditCardDD.selectOption(checkoutdata.creditcardType)
            await payInfo.cardHolderName.fill(creditcardHolderName)
            await payInfo.cardNumber.fill(creditcardNumber)
            await payInfo.expiryMonthDD.selectOption(checkoutdata.expirymonth)
            await payInfo.expiryYearDD.selectOption(checkoutdata.expiryYear)
            await payInfo.cardCode.fill(checkoutdata.cardCode)
            await payInfo.confirmationContinueBtn.click()
        }
        else if (await payInfo.PoNumber.isVisible()) {
            await payInfo.PoNumber.fill(PONumber)
            await payInfo.confirmationContinueBtn.click()
        }
        else {
            await payInfo.confirmationContinueBtn.click()
        }
    }
    async confirmOrderMeth(page) {
        let confirmCheck = new confirmOrder(page)
        await confirmCheck.confirmOrderBtn.click()
    }
    async thankPage(page) {
        let thankPage = new thankyouPage(page)
        await thankPage.ordercontinueBtn.first().click()
    }
    async seller(page) {
        return "Order confirmed from the user"
    }
}

export default cartSetup
