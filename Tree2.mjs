import { Queue } from './DataStructures';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (!this.root) {
      this.root = newNode;
    } else if (newNode.value < node.value) {
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else if (newNode.value > node.value) {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  bfs(searchVal) {
    const q = new Queue();
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      const currNode = q.dequeue();

      if (currNode.value === searchVal) {
        return currNode;
      } else {
        console.log(`Searched ${currNode.value}`);
      }

      if (currNode.left) {
        q.enqueue(currNode.left);
      }
      if (currNode.right) {
        q.enqueue(currNode.right);
      }
    }
  }

  dfs(searchVal, node = this.root) {
    if (!node) return;
    if (node.value === searchVal) {
      return node;
    } else {
      console.log(`Searched ${node.value}`);
    }

    const foundLeft = this.dfs(searchVal, node.left);
    if (foundLeft) return foundLeft;

    const foundRight = this.dfs(searchVal, node.right);
    if (foundRight) return foundRight;
  }
}

const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(25);
tree.insert(4);
tree.insert(8);
tree.insert(2);
tree.insert(6);
tree.insert(9);
tree.insert(30);
tree.insert(20);

const res = tree.dfs(8);
console.log(res);
