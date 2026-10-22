/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        low = Math.min(low, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - low);
    }    

    return maxProfit;
};