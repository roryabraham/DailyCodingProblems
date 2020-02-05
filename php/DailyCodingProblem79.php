<?php 
/*
    This problem was asked by Facebook.

    Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

    For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

    Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.
*/

function canBeMadeNonDecreasing($array) {
    if (count($array) <= 1) {
        return true;
    }

    $usedMod = false;
    $prev = $array[0];
    for ($i=1; $i < count($array); $i++) {
        if ($array[$i] < $prev) {
            if ($usedMod) {
                return false;
            }
            $usedMod = true;
        }
        $prev = $array[$i];
    }

    return true;
}

$test1 = [10, 5, 7];
$test2 = [10, 5, 1];

var_dump((bool) canBeMadeNonDecreasing($test1));
var_dump((bool) canBeMadeNonDecreasing($test2));

?>