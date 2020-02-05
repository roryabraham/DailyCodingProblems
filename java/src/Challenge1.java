/**
 * Author: Rory Abraham
 * Date: 10/29/19
 */

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class Challenge1 {

    /*
        Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
        For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
     */
    public static void main(String[] args) {
        List<Integer> test1 = Arrays.asList(10, 15, 3, 7);
        System.out.println(containsPairwiseAdditiveComponentsOf(test1, 5));
    }


    private static boolean containsPairwiseAdditiveComponentsOf(List<Integer> list, int k) {

        HashSet<Integer> potentialDifferences = new HashSet<>();
        for(int i: list) {
            if(potentialDifferences.contains(i)){
                return true;
            }
            potentialDifferences.add(k - i);
        }

        return false;
    }
}
