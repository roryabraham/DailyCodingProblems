package Challenge3;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class BinaryTree<T> implements Serializable {

    private BinaryTreeNode<T> root;
    enum TraversalOrder {
        PRE_ORDER,
        IN_ORDER,
        POST_ORDER,
        BREADTH_FIRST,
        DEPTH_FIRST
    }

    public BinaryTree() {
        this.root = null;
    }
    public BinaryTree(BinaryTreeNode<T> root) {
        this.root = root;
    }

    public void insert(T data) {
        BinaryTreeNode<T> newNode = new BinaryTreeNode<>(data);
        insert(newNode);
    }

    public void insert(BinaryTreeNode<T> newNode) {
        if(this.root == null) {
            this.root = newNode;
            return;
        }

        Queue<BinaryTreeNode<T>> queue = new LinkedList<>();
        queue.add(this.root);
        while(!queue.isEmpty()) {
            BinaryTreeNode<T> curr = queue.poll();
            if(curr.left == null) {
                curr.left = newNode;
            }
            else {
                queue.add(curr.left);
            }
            if(curr.right == null) {
                curr.right = newNode;
            }
            else {
                queue.add(curr.right);
            }
        }
    }

    public boolean contains(BinaryTreeNode<T> target) {
        if(this.root == null) {
            return false;
        }
        return BreadthFirstSearch(target);
    }

    public boolean contains(BinaryTreeNode<T> target, TraversalOrder traversalOrder) {
        if(this.root == null) {
            return false;
        }
        switch(traversalOrder) {
            case DEPTH_FIRST:
            case PRE_ORDER:
            case IN_ORDER:
            case POST_ORDER:
                return DepthFirstSearch(target);
            case BREADTH_FIRST:
            default:
                return BreadthFirstSearch(target);
        }
    }

    private boolean BreadthFirstSearch(BinaryTreeNode<T> target) {
        Queue<BinaryTreeNode<T>> queue = new LinkedList<>();
        queue.add(this.root);

        while(!queue.isEmpty()) {
            BinaryTreeNode<T> node = queue.poll();
            if(node.equals(target)) { return true; }
            if(node.left != null) { queue.add(node.left); }
            if(node.right != null) { queue.add(node.right); }
        }

        return false;
    }

    private boolean DepthFirstSearch(BinaryTreeNode<T> target) {
        Stack<BinaryTreeNode<T>> stack = new Stack<>();
        stack.push(this.root);

        while(!stack.isEmpty()) {
            BinaryTreeNode<T> node = stack.pop();
            if(node.equals(target)) { return true; }
            if(node.left != null) { stack.push(node.left); }
            if(node.right != null) { stack.push(node.right); }
        }

        return false;
    }

    public void traverse(BinaryTreeNode<T> root) {
        traverseInOrder(root);
    }

    public void traverse(BinaryTreeNode<T> root, TraversalOrder traversalOrder) {
        switch (traversalOrder) {
            case PRE_ORDER:
                traversePreOrder(root);
                break;
            case IN_ORDER:
                traverseInOrder(root);
                break;
            case POST_ORDER:
                traversePostOrder(root);
                break;
            default:
                traverseInOrder(root);
        }
    }

    private void traverseInOrder(BinaryTreeNode<T> node) {
        // base case
        if(node == null)
            return;

        traverseInOrder(node.left);
        System.out.println(node.value);
        traverseInOrder(node.right);
    }

    private void traversePreOrder(BinaryTreeNode<T> node) {
        // base case
        if(node == null)
            return;

        System.out.println(node.value);
        traversePreOrder(node.left);
        traversePreOrder(node.right);
    }

    private void traversePostOrder(BinaryTreeNode<T> node) {
        // base case
        if(node == null)
            return;

        traversePostOrder(node.left);
        traversePostOrder(node.right);
        System.out.println(node.value);
    }

    private void writeObject(ObjectOutputStream out) throws IOException {
        if(this.root == null)
            return;
        Queue<BinaryTreeNode<T>> queue = new LinkedList<>();
        queue.add(this.root);
        while(!queue.isEmpty()) {
            BinaryTreeNode<T> node = queue.poll();
            if(node.left != null) {
                queue.add(node.left);
            }
            if(node.right != null) {
                queue.add(node.right);
            }
            out.writeObject(node);
        }
    }

    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        try {
            BinaryTree<T> tree = new BinaryTree<>();
            while(in.available() > 0) {
                tree.insert((BinaryTreeNode<T>) in.readObject());
            }
        }
        catch(Exception e) {
            System.out.println("Something went wrong in deserialization. Exiting...");
            System.exit(-1);
        }
    }
}
