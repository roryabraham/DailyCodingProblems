package Challenge11;

import java.util.LinkedList;
import java.util.Queue;

public class SuffixTree {

    private SuffixTreeNode root;

    public SuffixTree() {}

    public SuffixTree(SuffixTreeNode root) {
        this.root = root;
    }

    private void addNodeUtil(SuffixTreeNode node, SuffixTreeNode root) {
        if(this.root == null) {
            this.root = node;
            return;
        }

        String pattern = node.getData();

        Queue<SuffixTreeNode> queue = new LinkedList<>();
        queue.add(this.root);
        while(!queue.isEmpty()) {
            SuffixTreeNode curr = queue.poll();
            queue.addAll(curr.getChildren());

            int prefixLength = curr.getData().length();
            if(pattern.substring(0,prefixLength).hashCode() == curr.getData().hashCode()) {
                // prefix matches pattern

            }
        }
    }
}
