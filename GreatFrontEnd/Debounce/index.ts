export default function debounce<T extends (...args: any[]) => void>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, wait);
  };
}
