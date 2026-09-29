const twoSum = (numbers, target) =>{
    //1
    for(let i=0; i <numbers.length -1 ; i++ ){
        for(let j= i + 1; j<numbers.length ; j++){
            if(numbers[i] + numbers[j] == target) return[i + 1 ,j + 1]}}  
    
    //2
    let comp ={};
    for(let i = 0 ; i < numbers.length ;i++){
        if(comp[numbers[i]] >= 0){
            return [comp[numbers[i]],i +1];
        }
        comp[target-numbers[i]] = i +1
    }
    
};