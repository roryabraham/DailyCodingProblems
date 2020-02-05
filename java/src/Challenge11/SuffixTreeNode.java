package Challenge11;

import java.util.HashSet;
import java.util.Objects;

public class SuffixTreeNode {

    private String data;
    private HashSet<SuffixTreeNode> children;

    public SuffixTreeNode() {}

    public SuffixTreeNode(String data) {
        this.data = data;
    }

    public SuffixTreeNode(String data, HashSet<SuffixTreeNode> children) {
        this.data = data;
        this.children = children;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public void addChild(SuffixTreeNode child) {
        this.children.add(child);
    }

    public HashSet<SuffixTreeNode> getChildren() {
        return children;
    }

    public void setChildren(HashSet<SuffixTreeNode> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "TreeNode{" +
                "data=" + data +
                ", children=" + children +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SuffixTreeNode treeNode = (SuffixTreeNode) o;
        return Objects.equals(data, treeNode.data) &&
                Objects.equals(children, treeNode.children);
    }

    @Override
    public int hashCode() {
        return Objects.hash(data, children);
    }
}
