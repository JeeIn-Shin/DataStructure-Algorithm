let maxProfit = (prices) => {
    let profit = 0;
    let purchaseAmount = prices[0];
    
    for(let price of prices)    {
        purchaseAmount = Math.min(price, purchaseAmount);
        profit = Math.max(profit, price - purchaseAmount)
    }
    return profit;
};