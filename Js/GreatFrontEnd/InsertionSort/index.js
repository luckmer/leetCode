// https://pl.wikipedia.org/wiki/Sortowanie_przez_wstawianie

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > el) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = el;
  }
  return arr;
}

const a = insertionSort([9, 3, 6, 2, 1, 11]);

console.log(a); // [ 1, 2, 3, 6, 9, 11 ]
