let cart = ["shoes", "pants", "kurta"];


api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});


// CALLBACK HELL
// INVERSION OF CONTROL





