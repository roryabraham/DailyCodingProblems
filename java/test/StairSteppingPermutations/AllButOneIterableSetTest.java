package StairSteppingPermutations;

import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class AllButOneIterableSetTest {

    @Test
    public void iterationTest_1_traditional() {
        Set<Integer> set = new HashSet<>(Arrays.asList(1,2,3,4,5));
        int excluded = 5;

        List<Integer> expected = new ArrayList<>(Arrays.asList(1,2,3,4));
        List<Integer> iterated = new ArrayList<>();

        AllButOneIterableSet<Integer> iterableSet = new AllButOneIterableSet<>(set, excluded);
        while(iterableSet.hasNext()) {
            iterated.add(iterableSet.next());
        }

        assertEquals(expected,iterated);
    }

    @Test
    public void iterationTest_1_lambda() {
        Set<Integer> set = new HashSet<>(Arrays.asList(1,2,3,4,5));
        int excluded = 5;

        List<Integer> expected = new ArrayList<>(Arrays.asList(1,2,3,4));
        List<Integer> iterated = new ArrayList<>();

        AllButOneIterableSet<Integer> iterableSet = new AllButOneIterableSet<>(set, excluded);
        iterableSet.forEachRemaining(iterated::add);

        assertEquals(expected,iterated);
    }

}