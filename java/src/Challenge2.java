import java.util.Arrays;

/**
 * @author Rory Abraham
 * @since 10/30/19
 */
public class Challenge2 {

/* PROBLEM STATEMENT:
    Given an array of integers, return a new array such that each element at index i of the new array
        is the product of all the numbers in the original array except the one at i.

    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
    If our input was [3, 2, 1], the expected output would be [2, 3, 6].

    Follow-up: what if you can't use division?
 */

    public static void main(String[] args) {
        System.out.println("With input [1,2,3,4,5]: ");
        System.out.print("Produced output: ");
        printArray(getAllOthersProductArray(new int[]{1,2,3,4,5}));

        System.out.println("\nWith input [3,2,1]");
        System.out.print("Produced output: ");
        printArray(getAllOthersProductArray(new int[]{3,2,1}));
    }

    private static int[] getAllOthersProductArray(int[] original) {
        int[] products = new int[original.length];
        int totalProduct = Arrays.stream(original).reduce(1, (runningProduct, num)-> runningProduct *= num);
        for(int i=0; i < products.length; i++) {
            products[i] = totalProduct / original[i];
            products[i] = integerDivision(totalProduct, original[i]);
        }
        return products;
    }

    private static int integerDivision(int dividend, int divisor) {
        int sign = (dividend < 0 ^ divisor < 0) ? -1 : 1;
        int quotient = 0;
        while(dividend >= divisor) {
            dividend -= divisor;
            quotient++;
        }
        return sign*quotient;
    }

    private static void printArray(int[] arr) {
        StringBuilder builder = new StringBuilder();
        builder.append("[");
        Arrays.stream(arr).forEach((element) -> {
            builder.append(element);
            builder.append(", ");
        });
        builder.append("]");
        System.out.println(builder.toString());
    }
}
