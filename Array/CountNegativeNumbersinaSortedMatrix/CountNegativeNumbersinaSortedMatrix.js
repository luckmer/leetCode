//todo Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.

//todo Return the number of negative numbers in grid.

//todo Example 1:

//todo Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
//todo Output: 8
//todo Explanation: There are 8 negatives number in the matrix.
//todo Example 2:

//todo Input: grid = [[3,2],[1,0]]
//todo Output: 0
//todo Example 3:

//todo Input: grid = [[1,-1],[-1,-1]]
//todo Output: 3
//todo Example 4:

//todo Input: grid = [[-1]]
//todo Output: 1

const countNegatives = (grid) => {
    let numb = 0;
    let N = grid.length;
    let V = grid[0].length;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < V; j++) {
            if (grid[i][j] < 0) {
                numb++;
            }
        }
    }
    return numb;
};
