function makeCounterTs(initialValue: number = 0): () => number {
  return () => {
    return initialValue++;
  };
}
const counterTs = makeCounterTs();

console.log(counterTs()); // 0
console.log(counterTs()); // 1
console.log(counterTs()); // 2

// Expected output: 0, 1, 2
