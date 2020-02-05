package StairSteppingPermutations;

import StairSteppingPermutations.StairSteppingPermutations;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Stair Stepping Permutations Test")
class StairSteppingPermutationsTest {

    @Test
    public void parseSetTest_1() {
        String setStr = "{1, 2}";
        Set<Integer> correctSet = new HashSet<>(Arrays.asList(1,2));
        Set<Integer> parsedSet = StairSteppingPermutations.parseSet(setStr);
        assertEquals(correctSet, parsedSet);
    }

    @Test
    public void parseSetTest_2() {
        String setStr = "{1,3,5,7}";
        Set<Integer> correctSet = new HashSet<>(Arrays.asList(1,3,5,7));
        Set<Integer> parsedSet = StairSteppingPermutations.parseSet(setStr);
        assertEquals(correctSet, parsedSet);
    }

    @Test
    public void parseSetTest_3() {
        String setStr = "{-100, 99, 88, 10, 6}";
        Set<Integer> correctSet = new HashSet<>(Arrays.asList(99,88,10,6));
        Set<Integer> parsedSet = StairSteppingPermutations.parseSet(setStr);
        assertEquals(correctSet, parsedSet);
    }

    @Test
    public void computeAdditivePermutationsTest_1() {
        Set<Integer> stepSizes = new HashSet<>(Arrays.asList(1,2));
        int numSteps = 4;
        int numPermutations = StairSteppingPermutations.computeAdditivePermutations(stepSizes, numSteps);
        assertEquals(5, numPermutations);
    }


}