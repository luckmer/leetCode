const checkIfExist =(arr) =>  {
    for(let i = 0; i < arr.length; i ++) {
      const a = arr[i];
      for(let j = 0; j < arr.length; j ++) {
        const b = arr[j];
        if(b === 2 * a && i !== j) {
          return true;
        }
      }
    }
  return false;
};
