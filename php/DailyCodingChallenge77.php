<?php

    /*
    This problem was asked by Snapchat.

    Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

    The input list is not necessarily ordered in any way.

    For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
    */
    
    function mergeOverlappingIntervals($intervals) {
        if(count($intervals) == 0 || count($intervals) == 1) {
            return $intervals;
        }
        
        // sort intervals by starting time
        usort($intervals, function($a, $b) {
            return $a[0] >= $b[0];
        });

        $merged = [];
        $curr = $intervals[0];
        for ($i = 1; $i < count($intervals); $i++) {
            $currStart = $curr[0];
            $currEnd = $curr[1];

            $next = $intervals[$i];
            $nextStart = $next[0];
            $nextEnd = $next[1];

            if ($nextStart <= $currEnd) {
                // merge intervals and assign to curr
                $curr = [$currStart, max($currEnd, $nextEnd)];
            }
            else {
                // intervals to not overlap, store curr and reassign to next
                array_push($merged, $curr);
                $curr = $next;
            }
        }

        array_push($merged, $curr);
        return $merged;
    }

    function runTest($input, $expected, $testName) {
        $output = mergeOverlappingIntervals($input);
        if ($output === $expected) {
            printf("Test %s passed!\n\n", $testName);
        }
        else {
            printf("Test %s failed.\n", $testName);
            echo "Expected output:\n";
            print_r($expected);
            echo "\nProduced output:\n";
            print_r($output);
            echo "\n\n";
        }
    }

    $testInput1 = [
        [1, 3],
        [5, 8],
        [4, 10],
        [20, 25]
    ];
    $expectedOutput1 = [
        [1, 3],
        [4, 10],
        [20, 25]
    ];

    $testInput2 = [];
    $expectedOutput2 = [];

    $testInput3 = [
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6]
    ];
    $expectedOutput3 = [[1, 6]];

    $testInput4 = [
        [-1, 2],
        [-500, -100],
        [1000, 2000],
        [-5000, -4000],
        [-4500, -4000],
        [0, 5]
    ];
    $expectedOutput4 = [
        [-5000, -4000],
        [-500, -100],
        [-1, 5],
        [1000, 2000],
    ];

    runTest($testInput1, $expectedOutput1, "Test 1");
    runTest($testInput2, $expectedOutput2, "Test 2");
    runTest($testInput3, $expectedOutput3, "Test 3");
    runTest($testInput4, $expectedOutput4, "Test 4");
?>