const memo = {};

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
};

const missingNumber = (array, n) => {
  let total = ((n + 1) * n) / 2;
  let sumOfArray = array.reduce((acc, curr) => acc + curr, 0);
  return total - sumOfArray;
};

const duplicates = (array) => {
  const uniqueElements = new Set();
  const duplicateElements = new Set();

  array.forEach((element) => {
    if (uniqueElements.has(element)) {
      duplicateElements.add(element);
    } else {
      uniqueElements.add(element);
    }
  });

  console.log(duplicateElements);

  return duplicateElements.size === 0
    ? -1
    : Array.from(duplicateElements).sort((a, b) => a - b);
};

const duplicates2 = (array, length) => {
  const uniqueElements = new Set();
  let duplicateElements = [];

  for (let i = 0; i < length; i++) {
    const currentElement = array[i];

    if (!uniqueElements.has(currentElement)) {
      uniqueElements.add(currentElement);
    } else {
      duplicateElements.push(currentElement);
    }
  }

  return !duplicateElements ? -1 : duplicateElements.sort((a, b) => a - b);
};

// console.log(duplicates2([3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5], 13));
// 3 4 12

function findLeaders(A) {
  const leaders = [];
  let maxRight = -1;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] >= maxRight) {
      maxRight = A[i];
      leaders.unshift(A[i]);
    }
  }
  return leaders;
}

// // Example usage:
// const A1 = [16, 17, 4, 3, 5, 2];
// console.log(findLeaders(A1)); // Output: [17, 5, 2]

// const A2 = [1, 2, 3, 4, 0];
// console.log(findLeaders(A2)); // Output: [4, 0]

const rotateArr = (arr, d, n) => {
  d = d % n;
  const rotatedArray = arr.slice(d).concat(arr.slice(0, d));
  return rotatedArray;
};

// console.log(rotateArr([1, 2, 3, 4, 5], 2, 5));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
const quickQueue = new Queue();

// quickQueue.enqueue("value1");
// quickQueue.enqueue("value2");
// quickQueue.enqueue("value3");

// console.log(quickQueue.first);
// console.log(quickQueue.last);
// console.log(quickQueue.size);
// quickQueue.enqueue("value4");
// console.log(quickQueue.dequeue());

class node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    // Make new node to be a head.
    const newNode = new node(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  append(value) {
    const newNode = new node(value, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }
}

const enable = new linkedList();

enable.prepend(1);
enable.prepend(2);
enable.prepend(3);
enable.prepend(4);
enable.append(5);

console.log(enable);
