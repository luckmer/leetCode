// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const  generate =(n) => {
let result = [[1]]
for(let row = 0 ; row < n ; row++){
    result[row] = []
    for (let col = 0; col < row  + 1 ; col++){
        if(col === 0 || col === row){
            result[row][col] = 1
        }else{
            result[row][col] = result[row -1 ][col - 1 ] + result[row - 1][col -1 ]
        }    
    }
}
    
    return result

};
