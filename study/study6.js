class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return node;
  }

  getLastNode() {
    let node = this.head;
    console.log(node);
    if (node) {
      while (node) {
        node = node.next;
      }
    }
    return node;
  }

  append(value) {
    const newNode = new ListNode(value);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }
}

class Stack {
  constructor() {
    this.LinkedList = new LinkedList();
  }

  push(value) {
    this.LinkedList.append(value);
  }

  value() {
    return this.LinkedList;
  }

  lastNode() {
    return this.LinkedList.getLastNode();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
const data = stack.value();

const lastTail = stack.lastNode();
console.log(lastTail);
