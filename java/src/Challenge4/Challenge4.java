package Challenge4;

import java.util.HashSet;
import java.util.Set;

public class Challenge4 {

    public static void main(String[] args) {
        System.out.printf("Given input[3,4,-1,1]: produced output %d\n", findLowestPositiveMissingInt(new int[]{3, 4, -1, 1}));
        System.out.printf("Given input[1,2,0]: produced output %d\n", findLowestPositiveMissingInt(new int[]{1, 2, 0}));
    }

    private static int findLowestPositiveMissingInt(int[] array) {
        int max = array[0];
        Set<Integer> encountered = new HashSet<>();
        encountered.add(max);
        int min = 1;

        for (int item : array) {
            if (item <= 0) {
                continue;
            }
            encountered.add(item);
            if (item > max) {
                max = item;
            }
        }

        while (min < max) {
            if (!encountered.contains(min)) {
                return min;
            }
            min++;
        }
        return max + 1;
    }

}