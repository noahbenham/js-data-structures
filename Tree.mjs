import { Queue } from './DataStructures';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Learned:
 *  - Can't overload methods in JS
 *  - Don't allow initialization of the Tree with a value
 *  - KISS
 */
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

  bfs(search) {
    const q = new Queue();
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      const currNode = q.dequeue();
      if (currNode.value === search) {
        console.log(`Found ${currNode.value}`);
        return true;
      }
      if (currNode.left) {
        q.enqueue(currNode.left);
      }
      if (currNode.right) {
        q.enqueue(currNode.right);
      }
      console.log(`Visiting ${currNode.value}`);
    }
  }

  dfs(search, node = this.root) {
    if (node.isVisited) return;
    node.isVisited = true;

    console.log(`Visiting ${node.value}`);
    if (node.value === search) {
      console.log(`Found ${search}`);
      return true;
    }

    [node.left, node.right].forEach(node => {
      const found = this.dfs(search, node);
      if (found) return true;
    });
  }

  lca(val1, val2, node = this.root) {
    if (!node) return;
    if (node.value === val1 || node.value === val2) return node;

    const left = this.lca(val1, val2, node.left);
    const right = this.lca(val1, val2, node.right);

    if (left && right) return node;
    return left || right;
  }

  pre_order(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.pre_order(node.left);
    this.pre_order(node.right);
  }

  in_order(node = this.root) {
    if (!node) return;
    this.in_order(node.left);
    console.log(node.value);
    this.in_order(node.right);
  }

  post_order(node = this.root) {
    if (!node) return;
    this.post_order(node.left);
    this.post_order(node.right);
    console.log(node.value);
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
console.log(res.value);

// console.log('Pre-order:');
// tree.pre_order();

// console.log('In-order:');
// tree.in_order();

// console.log('Post-order:');
// tree.post_order();
