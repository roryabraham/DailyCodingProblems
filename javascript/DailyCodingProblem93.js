/*
    This problem was asked by Apple.
    Given a tree, return the size of the largest tree/subtree that is a BST.
*/

class TreeNode {
    constructor(data, children=null) {
        this.data = data;
        this.children = (children === null) ? [] : children;
    }
}

class Tree {
    constructor(root=null) {
        this.root = root;
    }

    isBST(root=this.root) {
        return this.isBSTUtil(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
    
    isBSTUtil(node, min, max) {
        // base case
        if (!node || node.children.length === 0) {
            return true;
        }

        // check BST property of current node
        if (node.children.length > 2
            || node.data < min
            || node.data > max) {
            return false;
        }

        // check both subtrees
        if (node.children.length === 2) {
            return this.isBSTUtil(node.children[0], min, node.data) && this.isBSTUtil(node.children[1], node.data, max);
        }
        
        // determine which way subtree stems before recurring
        return node.children[0].data > node.data ?
                this.isBSTUtil(node.children[0], node.data, max)    // subtree stems right
              : this.isBSTUtil(node.children[0], min, node.data);   // subtree stems left
    }

    size(node=this.root) {
        if (node === null) {
            return 0;
        }
        else if (node.children.length === 0) {
            return 1;
        }
        else {
            return 1 + node.children.reduce((totalSize, child) => totalSize + this.size(child));
        }
    }

    largestBST(node=this.root, maxSize=0, currSize=0, subTreeMin=Number.NEGATIVE_INFINITY, subTreeMax=Number.POSITIVE_INFINITY) {
        // base cases
        if (node === null) { return 0; }
        if (node.children.length === 0) { return 1; }

        // BST property not satisfied
        if (node.children.length > 2
            || node.data < subTreeMin
            || node.data > subTreeMax) {
            // compute size of largest BST among all child subtrees
            let largestSubBST = Math.max(node.children.map((subroot) => this.largestBST(subroot,
                                                                            maxSize,
                                                                            0,
                                                                            Number.NEGATIVE_INFINITY,
                                                                            Number.POSITIVE_INFINITY)));
            // return global max or subtree max
            return Math.max(largestSubBST, maxSize);
        }

        // update max size if necessary
        maxSize = (currSize > maxSize) ? currSize : maxSize;

        // BST property met w/ two children
        if (node.children.length === 2) {
            let largestLeftBST = 1 + this.largestBST(node.children[0], maxSize, currSize + 1, subTreeMin, node.data);
            let largestRightBST = 1 + this.largestBST(node.children[1], maxSize, currSize + 1, node.data, subTreeMax);
            return Math.max(largestLeftBST, largestRightBST);
        }

        // only one child: determine which way subtree stems before recurring
        return node.children[0].data < node.data
                ? 1 + this.largestBST(node.children[0],
                                        maxSize, currSize + 1,
                                        subTreeMin, node.data)  // subtree stems left
                : 1 + this.largestBST(node.children[1],
                                        maxSize, currSize + 1,
                                        node.data, subTreeMax); // subtree stems right
    }
}

/*
            4
           / \
          3   6
         / \   \
        2   5   8
               /
              7
*/
let tree = new Tree();
tree.root = new TreeNode(4);
tree.root.children = [new TreeNode(3), new TreeNode(6)];
tree.root.children[0].children = [new TreeNode(2), new TreeNode(5)];
tree.root.children[1].children = [new TreeNode(8)];
tree.root.children[1].children[0].children = [new TreeNode(7)];

console.log(tree.largestBST());
