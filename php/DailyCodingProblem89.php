<?php


// This problem was asked by LinkedIn.

// Determine whether a tree is a valid binary search tree.

// A binary search tree is a tree with two children, left and right, and satisfies the constraint:
//     1) that the key in the left child must be less than or equal to the root 
//     2) the key in the right child must be greater than or equal to the root.

class BSTNode{
    private $item;
    public $left;
    public $right;

    public function __construct($item, $left = null, $right = null) {
        $this->item = $item;
        $this->left = $left;
        $this->right = $right;
    }

    public function printInfo() {
        echo $this->item;
        echo "\n";
        echo ($this->left == null) ? 'left: null' : '' ;
        echo "\n";
        echo ($this->right == null) ? 'right: null' : '';
        echo "\n";
    }

    public function isLeaf() {
        return $this->item != null &&
               $this->left == null &&
               $this->right == null;
    }

	public function getItem() { return $this->item; }
    public function setItem($newItem) { $this->item = $newItem; }
    
    public function getLeft() { return $this->left; }
    public function setLeft($node) { $this->left = $node; }

    public function getRight() { return $this->right; }
    public function setRight($node) { $this->right = $node; }
}

class BST {
    public $root;

    public function __construct($root = null) {
        $this->root = $root;
    }

    public function isValidBST() {
        return (isset($this->root)) 
                ? $this->isValidBST_Util($this->root)
                : false;
    }

    private function isValidBST_Util($curr) {
        $curr->printInfo();
        if ($curr->isLeaf()) {
            return true;
        }
        else {

            // check bst condition and recur over left subtree
            if (isset($curr->left)) {
                return ($curr->left->getItem() < $curr->getItem())
                     ? ($this->isValidBST_Util($curr->left))
                     : false;
            }

            // check bst condition and recur over right subtree
            if (isset($curr->right)) {
                return ($curr->right->getItem() > $curr->getItem)
                     ? ($this->isValidBST_Util($curr->right))
                     : false;
            }
        }
   }
}

/*
            4
           / \
          3   5
         /   / \
        2   8   6
       / \   \    \
      1   3   5    7
*/

$tree = new BST(new BSTNode(4));
$tree->root->setLeft(new BSTNode(3));
$tree->root->left->setLeft(new BSTNode(2));
$tree->root->left->left->setLeft(new BSTNode(1));
$tree->root->left->left->setRight(new BSTNode(3));
$tree->root->setRight(new BSTNode(5));
$tree->root->right->setLeft(new BSTNode(8));
$tree->root->right->left->setRight(new BSTNode(5));
$tree->root->right->setRight(new BSTNode(6));
$tree->root->right->right->setRight(new BSTNode(7));

echo $tree->isValidBST() ? 'true' : 'false';

?>
