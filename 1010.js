// You are given a list of songs where the ith song has a duration of time[i] seconds.
// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
// Example 1:
// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:
// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

const  numPairsDivisibleBy60 = (time) =>  {
//     let counter = 0
    
//     for(let i = 0 ; i < time.length ; i++){
//             for(let j = i +1  ; j < time.length  ; j++){
//            if ((time[i] + time[j]) % 60 == 0)counter++
//         }   
//     }
//     return counter

    const array =new Array(60).fill(0);
    let counter = 0
    
        for (let t of  time) {
            counter = t % 60 === 0  ? counter + array[0] : counter + array[60 - t % 60]
            array[t % 60]++; 
        }
    return counter

};
