package Challenge3;

import java.io.Serializable;

public class BinaryTreeNode<T> implements Serializable {

    T value;
    BinaryTreeNode<T> left;
    BinaryTreeNode<T> right;

    /* Constructors */
    public BinaryTreeNode(T value, BinaryTreeNode<T> left, BinaryTreeNode<T> right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    public BinaryTreeNode(T value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    public BinaryTreeNode() {
        this.value = null;
        this.left = null;
        this.right = null;
    }

    /* Getters and Setters */
    public T getValue() { return value; }
    public void setValue(T value) { this.value = value; }

    public BinaryTreeNode<T> getLeft() { return left; }
    public void setLeft(BinaryTreeNode<T> left) { this.left = left; }

    public BinaryTreeNode<T> getRight() { return right; }
    public void setRight(BinaryTreeNode<T> right) { this.right = right; }
}
