// Odwzorowanie metody forEach za pomocą pętli for
const forEachFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

const b = forEachFn([1, 2, 3], (value) => value);

// console.log(b);

const mapFn = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
};

const a = mapFn([1, 2, 3], (value, i, array) => {
  return {
    value: value + 1,
  };
});

// console.log(a);

const entriesFn = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback([i, array[i]]));
  }
  return newArray;
};

const c = entriesFn(["1", "2", "3"], (value) => value);

const filterFn = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const filter = filterFn([1, 2, 3], (value) => value > 1);

const reduceFn = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i], i, array);
  }
  return initialValue;
};

const reduce = reduceFn(
  [1, 2, 3, 4],
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

const everyFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
};

const every = everyFn([2, 3, 4], (value) => value > 1);

function someEquivalent(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

// Użycie:
const array = [1, 3, 5, 7, 9, 10];
const hasEven = someEquivalent(array, (element) => {
  return element % 2 !== 0;
});

function includes(array, callbackForEachElement) {
  return array.indexOf(callbackForEachElement()) !== -1;
}

const is = includes([2, 3, 4], () => 1);

function recursivePromise(arrayOfPromises) {
  let results = [];

  let chain = arrayOfPromises.reduce((prevPromise, nextPromise) => {
    return prevPromise.then((result) => {
      results.push(result);
      return nextPromise;
    });
  }, Promise.resolve(null));

  chain = chain.then((result) => {
    results.push(result);
    return results;
  });

  chain = chain.catch((error) => {
    results.push(error);
    return results;
  });

  return chain;
}
const arrayOfPromises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(5),
];

recursivePromise(arrayOfPromises)
  .then((results) => {
    console.log("Final Results:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
