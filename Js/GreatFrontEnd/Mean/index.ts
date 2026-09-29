export default function mean(array: number[]): number {
  if (!array.length) return NaN;

  const data: number = array.reduce((a, b) => a + b, 0);

  return data / array.length;
}
