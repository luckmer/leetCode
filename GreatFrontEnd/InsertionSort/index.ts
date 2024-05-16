// https://pl.wikipedia.org/wiki/Sortowanie_przez_wstawianie

export default function insertionSort(arr: Array<number>): Array<number> {
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
