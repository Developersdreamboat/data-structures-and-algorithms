const { Tree, Node } = require('../data-structures/balancedBST');
const mergeSort = require("../algorithms/recursion/mergeSort");
const removeDuplicatesFromSortedArray = require("../modules/removeDuplicates");
const prettyPrint = require("../modules/prettyPrint");

/* Driver */
const array = [5, 1, 10, 2, 1, 8, 4, 5, 3, 5];
const sortedArray = mergeSort(array);
const buildArray = removeDuplicatesFromSortedArray(sortedArray);
let tree = new Tree(buildArray);
prettyPrint(tree.root);

/* Insertion */
tree.insert(7);
prettyPrint(tree.root);

/* Deletion */
tree.delete(8);
prettyPrint(tree.root);

/* Search */
console.log(tree.find(5));
console.log(tree.find(8));

/* Test iteratives with provided function and without */
function printNodeValue(node) {
  console.log(node.data);
}
tree.levelOrder(printNodeValue);
console.log(tree.levelOrder());
tree.inOrderIterative(printNodeValue);
console.log(tree.inOrderIterative());
tree.preOrderIterative(printNodeValue);
console.log(tree.preOrderIterative());
tree.postOrderIterative(printNodeValue);
console.log(tree.postOrderIterative());

/* Test recursives with provided function */
const values = [];
function pushNodeValue(node) {
  values.push(node.data);
}
//tree.inOrderRecursive(pushNodeValue);
//tree.preOrderRecursive(pushNodeValue);
//tree.postOrderRecursive(pushNodeValue);
console.log(`Depth Recursive Array: ${values}`);

/* Height of tree */
const testNode1 = tree.find(3);
const testNode2 = tree.find(5);
const testNode3 = tree.find(4);
console.log(`3: ${tree.height(testNode1)}\n 5: ${tree.height(testNode2)}\n 4: ${tree.height(testNode3)}`);