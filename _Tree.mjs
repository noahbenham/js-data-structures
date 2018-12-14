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

const res = tree.lca(8, 2);
