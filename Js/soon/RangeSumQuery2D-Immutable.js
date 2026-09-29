// Given a 2D matrix matrix, handle multiple queries of the following type:

// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).


var NumMatrix = function(matrix) {
    this.data = matrix
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let counter = 0 , context = this.data

    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            counter+= context[i][j]
        }
    }
    return counter
    };
