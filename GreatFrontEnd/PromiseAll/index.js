async function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (!iterable.length) {
      resolve([]);
    }

    const promiseResult = new Array(iterable.length);
    let solved = 0;

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          promiseResult[index] = result;
          solved++;

          if (solved === iterable.length) {
            resolve(promiseResult);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 4);
});
const promise3 = 42;

promiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, 4]
  })
  .catch((error) => {
    console.error(error);
  });
