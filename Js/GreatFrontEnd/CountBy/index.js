function countBy(array, iteratee) {
  return array.reduce((res, val) => {
    const key = iteratee(val);

    return (res[key] = (res[key] || 0) + 1);
  }, {});
}

const a = countBy([6.1, 4.2], Math.floor);

console.log(a); // { '4': 1, '6': 1 }

const b = countBy([6.1], Math.floor);

console.log(b); // { '6': 1 }
