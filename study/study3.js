const products = [
  { name: "apples", category: "fruits" },
  { name: "oranges", category: "fruits" },
  { name: "potatoes", category: "vegetables" },
];

const result = products.reduce((x, y) => {
  (x[y.category] = x[y.category] || []).push(y);

  return x;
}, {});

console.log(result);
