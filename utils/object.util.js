import homepage from "../POM/home.js"
import searchpage from "../POM/search.js"
import cartPage from "../POM/cart.js"
import billingAddress from "../POM/billingAddress.checkout.js"
import shippingAddress from "../POM/shippingAddress.checkout.js"
import shippingMethod from "../POM/shipingMethod.checkout.js"
import paymentMethod from "../POM/paymentMethod.checkout.js"
import paymentInfo from "../POM/paymentInfo.checkout.js"
let billAdd = new billingAddress(page)
let shipAdd = new shippingAddress(page)
let shipMeth = new shippingMethod(page)
let payment = new paymentMethod(page)
let payInfo = new paymentInfo(page)