export default function countByTs<T>(
  array: Array<T>,
  iteratee: (value: T) => number | string
): Record<string, number> {
  return array.reduce((res: Record<string | number, number>, val: T) => {
    const key = iteratee(val);
    res[key] = (res[key] || 0) + 1;
    return res;
  }, {});
}
