const BinarySearchTree = require("./BinarySearchTree");

const bst = new BinarySearchTree(5, 5);
bst.insert(2, 2);
bst.insert(20, 20);
bst.insert(1, 1);
bst.insert(4, 4);
bst.insert(15, 15);
bst.insert(21, 21);
bst.insert(10, 10);
bst.insert(17, 17);
bst.insert(25, 25);

// console.log("find 4", bst.find(4));
// console.log("remove 4", bst.remove(4));
// console.log("find 4 again", bst.find(4));
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsInOrder());
// console.log(bst.dfsPostOrder());
// console.log(bst.bfs());


const binarySearchTree = new BinarySearchTree(5, 5);

binarySearchTree.insert(2, 2);
binarySearchTree.insert(19, 19);
binarySearchTree.insert(15, 15);
binarySearchTree.insert(28, 28);
binarySearchTree.insert(30, 30);
binarySearchTree.insert(10, 10);
binarySearchTree.insert(18, 18);

    // Resulting tree:
    //     5
    //   /   \
    // 2      19
    //       /  \
    //      15  28
    //     /  \   \
    //    10  18  30

console.log("Leaves in Tree: ", binarySearchTree.countLeaves());

binarySearchTree.isBalancedBST() > -1 ? console.log("Tree is balanced") : console.log("Tree is unbalanced");