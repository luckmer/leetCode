const maxProfit =(prices, fee) => {
    let result = 0 , current = -prices[0];
    
    for(let i = 1 ; i < prices.length ; i++){
        result  = Math.max(result , current + prices[i] - fee ) 
        current = Math.max(current , result - prices[i] )     
            
    }
        return result
    
};
