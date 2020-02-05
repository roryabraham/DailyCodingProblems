package Challenge11;

import java.util.HashSet;
import java.util.Objects;

public class TrieNode {
    private String data;
    private HashSet<TrieNode> children;
    private boolean isCanonical; // a boolean value which denotes that the data of this node came from the data source

    public TrieNode() {
        this.data = "";
        this.children = new HashSet<>();
        this.isCanonical = false;
    }

    public TrieNode(String data) {
        this.data = data;
        this.children = new HashSet<>();
        this.isCanonical = false;
    }

    public TrieNode(String data, HashSet<TrieNode> children) {
        this.data = data;
        this.children = children;
        this.isCanonical = false;
    }

    public TrieNode(String data, HashSet<TrieNode> children, boolean isCanonical) {
        this.data = data;
        this.children = children;
        this.isCanonical = isCanonical;
    }

    public boolean isLeaf() {
        return this.children.isEmpty();
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public HashSet<TrieNode> getChildren() {
        return children;
    }

    public void setChildren(HashSet<TrieNode> children) {
        this.children = children;
    }

    public void addChild(TrieNode child) {
        this.children.add(child);
    }

    public boolean isCanonical() {
        return isCanonical;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TrieNode trieNode = (TrieNode) o;
        return isCanonical == trieNode.isCanonical &&
                Objects.equals(data, trieNode.data) &&
                Objects.equals(children, trieNode.children);
    }

    @Override
    public int hashCode() {
        return Objects.hash(data, children, isCanonical);
    }

    @Override
    public String toString() {
        return "TrieNode{" +
                "data='" + data + '\'' +
                ", children=" + children +
                ", isCanonical=" + isCanonical +
                '}';
    }
}
