export class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(val) {
    this.q.push(val);
  }

  dequeue() {
    return this.q.shift();
  }

  isEmpty() {
    return this.q.length === 0;
  }
}

export class Stack {
  constructor() {
    this.s = [];
  }

  push(val) {
    this.s.push(val);
  }

  pop() {
    return this.s.pop();
  }

  isEmpty() {
    return this.s.length === 0;
  }
}
