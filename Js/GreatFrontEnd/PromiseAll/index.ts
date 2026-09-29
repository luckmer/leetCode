function promiseAllTs<T extends readonly unknown[] | []>(
  iterable: T
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      resolve([] as { -readonly [P in keyof T]: Awaited<T[P]> });
      return;
    }

    const results: Promise<T>[] = new Array(iterable.length);
    let completedCount = 0;

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value: any) => {
          results[index] = value;
          completedCount += 1;

          if (completedCount === iterable.length) {
            resolve(results as { -readonly [P in keyof T]: Awaited<T[P]> });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
