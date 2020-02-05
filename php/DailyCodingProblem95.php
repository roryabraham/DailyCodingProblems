<?php
/*
This problem was asked by Palantir.

Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering.
If there is not greater permutation possible, return the permutation with the lowest value/ordering.

For example, the list [1,2,3] should return [1,3,2].
The list [1,3,2] should return [2,1,3].
The list [3,2,1] should return [1,2,3].

The list [8, 5, 6, 9, 9, 0, 2] should return [8, 5, 6, 9, 9, 2, 0].
The list [8, 5, 6, 9, 9, 2, 0] should return [8, 5, 9, 0, 2, 6, 9].
The list [8, 5, 9, 0, 2, 6, 9] should return [8, 5, 9, 0, 2, 9, 6].
The list [8, 5, 9, 0, 2, 9, 6] should return [8, 5, 9, 0, 6, 2, 9].
The list [8, 5, 9, 0, 6, 2, 9] should return [8, 5, 9, 0, 6, 9, 2].
The list [8, 5, 9, 0, 6, 9, 2] should return [8, 5, 9, 0, 9, 2, 6].
The list [8, 5, 9, 0, 9, 2, 6] should return [8, 5, 9, 0, 9, 6, 2].
The list [8, 5, 9, 0, 9, 6, 2] should return [8, 5, 9, 2, 0, 6, 9].
...
The list [9, 9, 8, 6, 5, 2, 0] should return [0, 2, 5, 6, 8, 9, 9].


Can you perform the operation without allocating extra memory (disregarding the input memory)?
*/

function nextPermutation($list) {
    // Find the first number in the list such that everything that follows
        // is a (not strictly) descending sequence
        // where at least one element is greater than current
    $i = sizeof($list)-1;
    $curr = $list[$i];
    $pivot = -1;
    for ($i = $i-1; $i > 0; $i--) {
        $prev = $curr;
        $curr = $list[$i];
        if ($curr < $prev) {
            $pivot = $i;
            break;
        }
    }

    // whole list is in descending order, restart sequence by returning the reverse
    if ($pivot === -1) {
        return array_reverse($list);
    }

    // Find the minimum number in the following sequence
        // which is strictly greater than current, and swap with current.
    $min = 10;
    $swapIndex = $pivot + 1;
    for ($i = $pivot+1; $i < sizeof($list)-1; $i++) {
        $curr = $list[$i];
        if ($curr <= $list[$pivot]) {
            // no futher numbers will be greater than pivot
            break;
        }
        if ($curr < $min) {
            $min = $curr;
            $swapIndex = $i;
        }
    }
    $list[$swapIndex] = $pivot;
    $list[$pivot] = $min;

    // sort the sublist to the right of the current position in ascending order
    $sorted = sort(array_slice($list, $pivot+1, sizeof($list)-$pivot));
    array_splice($list, $pivot+1, sizeof($sorted), $sorted);

    return $list;
}

?>