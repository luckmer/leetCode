const numWaterBottles = (numBottles, numExchange) => {

    //empty , full  
    // let empty = numBottles ;
    // let full = numBottles;
    // 3 empty = 1 full
    // 9 empty = 3 full
    // 1 full = 3 empty 
    // 9 full 3 empty => 3 full ==> 9 / 3 => 3 full  
    // let Full = numBottles / numExchange ;
    // console.log(Full)
    
    let drank = numBottles;
    let empty = numBottles;
    while (empty >= numExchange) {
        // let newDrinks = Math.floor(empty / numExchange);
        // drank += newDrinks;
        // empty = (empty % numExchange) + newDrinks;
    
        let newDrinks = Math.floor(empty / numExchange) 
    
        drank +=newDrinks
        //empty    => x empty /  numExchange  + newDrinks
        empty = (empty % numExchange ) + newDrinks
        
        
    }
    return drank;
    
    
};