const Queue = require("./Queue");

class BinarySearchTree {
  // your code here
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, null);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  getHeight(currentHeight = 0) {
    if (!this.right && !this.left) {
      return currentHeight;
    }

    const newHeight = currentHeight + 1;

    if (!this.left) return this.right.getHeight(newHeight);
    if (!this.right) return this.left.getHeight(newHeight);

    const leftHeight = this.left.getHeight(newHeight);
    const rightHeight = this.right.getHeight(newHeight);

    return Math.max(leftHeight, rightHeight);
  }

  find(key) {
    if (this.key == key) {
      return this.value
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();

        this.key = successor.key;
        this.value = successor.value;

        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key) {
      this.left.remove(key);
    } else if (key > this.key) {
      this.right.remove(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  isBST() {
    const values = this.dfsInOrder();

    for (let i = 1; i < values.length; ++i) {
      if (values[i] < values[i - 1]) return false;
    }

    return true;
  }

  findKthLargestNumber(k){
    const values = this.dfsInOrder();
    const kthIndex = values.length - k;

    if(kthIndex >= 0){
      return values[kthIndex];
    }else{
      throw new Error("'k' value exceeds the size of the BST.");
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }

    return this.left._findMin();
  }

  dfsInOrder(values = []) {
    if (this.left) {
      values = this.left.dfsInOrder(values);
    }

    values.push(this.value);

    if (this.right) {
      values = this.right.dfsInOrder(values);
    }
    return values;
  }

  dfsPreOrder(values = []) {
    values.push(this.value);

    if (this.left) {
      values = this.left.dfsPreOrder(values);
    }

    if (this.right) {
      values = this.right.dfsPreOrder(values);
    }

    return values;
  }

  dfsPostOrder(values = []) {
    if (this.left) {
      values = this.left.dfsPostOrder(values);
    }

    if (this.right) {
      values = this.right.dfsPostOrder(values);
    }

    values.push(this.value);

    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    queue.enqueue(tree); // Start the traversal a t the tree and add the tree node to the queue to kick off the BFS
    let node = queue.dequeue(); // Remove form the queue
    while (node) {
      values.push(node.value); // Add that dequeued value from the queue to an array

      if (node.left) {
        queue.enqueue(node.left); // Add the left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // Add the right child to the queue
      }

      node = queue.dequeue();

    }
    return values;
  }
}


module.exports = BinarySearchTree;