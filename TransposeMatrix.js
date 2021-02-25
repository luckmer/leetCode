const transpose =(matrix) =>  {

let table = [];
    for(let i = 0 ; i < matrix[0].length ; i++){
        let connect = [];
        for(let j = 0 ; j < matrix.length ; j++){
            connect.push(matrix[j][i])
        }
        table.push(connect)
    }
    return table
    
};