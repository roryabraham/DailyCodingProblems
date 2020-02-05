package Challenge8;

import java.util.Stack;

public class BinaryTree<T> {
    private BinaryTreeNode<T> root;

    public BinaryTree() {
        this.root = null;
    }

    public BinaryTree(BinaryTreeNode<T> root) {
        this.root = root;
    }

    public int countUnivalSubtrees() {
        int count = 0;
        Stack<BinaryTreeNode<T>> stack = new Stack<>();
        stack.push(this.root);
        while(!stack.isEmpty()) {
            BinaryTreeNode<T> node = stack.pop();
            if(node.getLeft() != null) {
                stack.push(node.getLeft());
            }
            if(node.getRight() != null) {
                stack.push(node.getRight());
            }
            count = isUnivalSubtree(node) ? count + 1 : count;
        }
        return count;
    }

    public static boolean isUnivalSubtree(BinaryTreeNode node) {
        if(node.getLeft() == null || node.getRight() == null) {
            return true;
        }
        else if(node.getLeft().data != node.data || node.getRight().data != node.data) {
            return false;
        }
        else {
            boolean leftSubtreeIsUnival = isUnivalSubtree(node.getLeft());
            boolean rightSubtreeIsUnival = isUnivalSubtree(node.getRight());
            return leftSubtreeIsUnival && rightSubtreeIsUnival;
        }
    }

}