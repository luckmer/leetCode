const twoSum = (nums, target ) => {
 for(let i = 0 ; i < nums.length ; i++){
     for(let j= i +1 ; j < nums.length ; j++){
         if(nums[i] + nums[j] === target) {
             return [i,j]
         }
     }
 }
    
    let map = {};
    
    for(let i = 0 ; i < nums.length ; i++){
        const result = target - nums[i];
        if(result in map){
            return  [map[result], i];
        }
        
        map[nums[i]] = i
    }
    
    
};