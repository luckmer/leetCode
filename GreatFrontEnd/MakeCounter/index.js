function makeCounter(initialValue = 0) {
  return function () {
    return initialValue++;
  };
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// Expected output: 0, 1, 2
