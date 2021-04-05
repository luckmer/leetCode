const sumOfUnique = (nums) =>  {

    let map ={},calc=0;
    
    nums.forEach(item => map[item] =(map[item] || 0) +1);
    Object.keys(map)
        .filter(key => map[key] === 1)
        .map((i) => calc+= +i);
    
    return calc
    
};