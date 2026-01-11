// Best way to buy and sell a product.
let maxProfitCalculation = function (prices) {
    let min = prices[0];
    
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
}

const arr = [1, 3, 6, 2, 7, 5];
const result = maxProfitCalculation(arr);

console.log(result);