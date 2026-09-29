console.log("end");

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class OneNode {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newHead = new LinkedListNode(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      return this;
    }

    this.tail.next = newHead;
    this.head = newHead;
    return this;
  }
}

// Doubly Linked List

class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class Node {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail.previous = this.tail;
    this.tail = newNode;
    return this;
  }

  delete(value) {}
}

const node = new Node();

node.append(2);
node.append(3);
node.delete(2);

// console.log(node);
