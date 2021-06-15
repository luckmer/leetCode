// Given the head of a singly linked list, return true if it is a palindrome.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false

const Reverse = (data) =>{
    let ret = new Array;
    
    for(let i = data.length ; i >= 0  ;i --){
        ret.push(data[i])
    }
    return ret.join("")
}

const isPalindrome =(head) =>  {
    const array = []
    while(head){
        array.push(head.val)
        head = head.next
    }
    return array.join("") === Reverse(array)
};
