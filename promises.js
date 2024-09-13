let cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

createOrder(cart)
.then(function (orderId) {
   return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
   return showOrderSummary(paymentInfo)
})
.then(function (paymentInfo) {
    return updateWallet(paymentInfo)
})





// const GITHUB_API = "https://github.com/Souvik-R";

// const user = fetch(GITHUB_API);

// console.log(user);


  