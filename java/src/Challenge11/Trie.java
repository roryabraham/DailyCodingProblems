package Challenge11;

public class Trie {
    private TrieNode root;

    public Trie() {
        this.root = new TrieNode();
    }

    public void insert(String s) {

    }

    public void insertUtil(String s, TrieNode root) {
        int currPrefixLength = root.getData().length();
        char c = s.charAt(currPrefixLength + 1);
        root.getChildren().forEach((child) -> {
            if(child.getData() )
        });
    }
}
