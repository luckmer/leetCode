export default function mean(array) {
  if (!array.length) return NaN;
  const data = array.reduce((a, b) => a + b, 0);

  return data / array.length;
}
