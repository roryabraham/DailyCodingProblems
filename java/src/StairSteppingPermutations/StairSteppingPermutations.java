package StairSteppingPermutations;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

/* PROBLEM DEFINITION:
    There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
    Given N, write a function that returns the number of unique ways you can climb the staircase.
    The order of the steps matters.

    For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2

    What if, instead of being able to climb 1 or 2 steps at a time,
    you could climb any number from a set of positive integers X?
    For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
    Generalize your function to take in X.
 */

public class StairSteppingPermutations {

    public static void main(String[] args) {
        int numSteps = Integer.parseInt(args[0]);
        Set<Integer> stepSizes = parseSet(args[1]);
        System.out.println(computeAdditivePermutations(stepSizes, numSteps));
    }


    /**
     * Compute the number of ways we can reach the nth step by taking step sizes in from the set of integers.
     *
     * For each step size k in a set S of size p<br>
     * &Tab;The nth step can be reached from the (n-k)th step<br>
     * &Tab;So long as n is greater than or equal to k
     * <br><br>
     *
     * This observation allows us to define the following recursion relation:<br>
     * &Tab;For step sizes k1...kj...kp in S, ways(n) = ways(n-k1) + ... + ways(n-kj) + ... + ways(n-kp)
     * <br>
     *
     * @param stepSizes The set of valid step sizes (positive integers only)
     * @param n The number of steps to reach
     * @return The number of ways we can reach the nth step by taking step sizes kj from stepSizes
     */
    public static int computeAdditivePermutations(Set<Integer> stepSizes, int n) {
        // mapping for dynamic programming optimization: O(n) instead of O(nlog(n))
        HashMap<Integer, Integer> waysMap = new HashMap<>();
        int numWays = 0;
        for(int k: stepSizes) {
            if(n - k < 0) {
                continue;
            }
            else if(n - k == 0) {
                numWays++;
            }
            else {
                if(!waysMap.containsKey(k)) {
                    waysMap.put(k, computeAdditivePermutations(stepSizes, n-k));
                }
                numWays += waysMap.get(k);
            }
        }
        return numWays;
    }


    /**
     * A utility method to parse a set of integers from a string with the format: "{x1, x2, x2,...}"
     * @param string A string representation of a set of integers
     * @return A Set of integers containing only positive numbers
     */
    public static Set<Integer> parseSet(String string) {
        Set<Integer> stairSizes = new HashSet<>();
        String stringNoBrackets = string.substring(1, string.length() - 1); // remove extraneous brackets from string
        StringTokenizer tokenizer = new StringTokenizer(stringNoBrackets, ",");
        while (tokenizer.hasMoreTokens()) {
            String nextToken = tokenizer.nextToken().replaceAll("\\s+", ""); // trim whitespace
            int stepSize = Integer.parseInt(nextToken);
            if (stepSize > 0) {
                stairSizes.add(Integer.parseInt(nextToken));
            }
        }
        return stairSizes;
    }
}
