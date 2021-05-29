// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const  canPlaceFlowers =(a, n)=> {
  let count = 0
 for(let i = 0 ; i< a.length ; i++){
    if(a[i] == 0 && (i === 0 || a[i - 1] === 0) && (i == a.length - 1 || a[i + 1] === 0)){
        a[i] = 1
        count ++
    }
    
     if(count >=n )return true
 }

    return false
};
