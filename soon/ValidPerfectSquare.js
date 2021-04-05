//Given a positive integer num, write a function which returns True if num is a perfect square else False.
//Follow up: Do not use any built-in library function such as sqrt.
//Input: num = 16
//Output: true
//Input: num = 14
//Output: false 


const isPerfectSquare = (num) =>  {
    if(num < 2 )return true
    let calc = Math.floor(num/2)
    for (let i =1; i<=calc; i++) {
        if (i*i == num)return true       
    }

    return false
};
