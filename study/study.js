class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  delete(value) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value === value) {
        if (prevNode) {
          prevNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode === this.tail) {
          this.tail = prevNode;
        }
      } else {
        prevNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    if (!this.head) {
      return [];
    }

    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  findA(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  deleteValue(value) {
    if (!this.head) return null;

    let deletedNode = this.findA(value);
    if (!deletedNode) return null;

    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  deleteDuplicates(head) {
    if (!head) return head;

    let current = head;

    while (current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }
}

const data = new LinkedList();

data.add(1);
data.add(1);
data.add(2);
data.add(2);

data.deleteDuplicates(data.head);

console.log(data.toArray());
