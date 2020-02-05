/* 
This problem was asked by Google.

Given the root of a binary tree, return a deepest node.
*/

class BinaryTreeNode {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    setData(data) { this.data = data; }
    setLeft(node) { this.left = node; }
    setRight(node) { this.right = node; }
}

class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }

    /**
     * 
     * @param {BinaryTreeNode} node The root of a binary tree or subtree.
     * @return {[number, BinaryTreeNode]} An array containing the greatest depth of the subtree in index 0 and the deepest node in index 1.
     */
    static getDeepestNode(node) {
        // base cases
        if (node === null) {
            return [0, null];
        }
        else if(node.left === null && node.right === null) {
            return [1, node];
        }
        else {
            // Compute the depth and deepest node of left and right subtrees
            let [leftDepth, leftDeepest] = this.getDeepestNode(node.left);
            let [rightDepth, rightDeepest] = this.getDeepestNode(node.right);

            // return the deeper of the two nodes
            return (leftDepth >= rightDepth) ? 
                [leftDepth + 1, leftDeepest] : 
                [rightDepth + 1, rightDeepest];
        }
    }
}

let root = new BinaryTreeNode("a");
root.setLeft(new BinaryTreeNode("b"));
root.setRight(new BinaryTreeNode("c"));
root.left.setLeft(new BinaryTreeNode("d"));

let tree = new BinaryTree(root);
console.log(BinaryTree.getDeepestNode(root));