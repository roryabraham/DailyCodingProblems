package Challenge56;

public class Challenge56 {

    // 1. Color the first vertex with the first color
    // 2. For the remaining V-1 vertices
        // Color the vertex with the lowest numbered color which has not been used on any previously colored adjacent vertex
        // If all previously used colors appear on vertices adjacent to v, assign it a new color

    public static boolean isKColorable(int[][] graph, int k) {
        // Data structure to store vertex colors
        int[] colors = new int[graph[0].length];
        int color = 1;  // 0 signifies uncolored

        // color first index with first color
        colors[0] = color;

        // for each remaining vertex
        for (int i=1; i < graph[0].length; i++) {
            // color the vertex with the lowest numbered color that has not been used on any previously colored adjacent vertex
            int highestColoredNeighbor = 0;
            for (int j=0; j < graph[0].length; j++) {
                if (graph[i][j] != 0) {
                    if (colors[j] != 0) {
                        // vertex is adjacent and previously colored, so conditionally update highest color
                        highestColoredNeighbor = (colors[j] > highestColoredNeighbor) ?
                                colors[j] : highestColoredNeighbor;
                    }
                }
            }
            if (highestColoredNeighbor == k) return false;
            colors[i] = highestColoredNeighbor + 1;
        }
        return true;
    }
}
