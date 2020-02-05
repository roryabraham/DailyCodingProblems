/*
    This problem was asked by Facebook.

    Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

    For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

    Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.
*/

const canBeMadeNonDecreasing = (array) => {
    if (array.length <= 1) { return true; }
    let modUsed = false;
    let prev = array[0];
    for (let i=1; i < array.length; i++) {
        if (array[i] < prev) {
            if (modUsed) {
                return false;
            }
            modUsed = true;
        }
        prev = array[i];
    }
    return true;
};

const test1 = [];
const test2 = [1];
const test3 = [10, 5, 7];
const test4 = [10, 5, 1];
const test5 = [11, 11];
const test6 = [1, 2, 1, 3, 4, 5];
const test7 = [1, 2, 1, 2, 1, 2, 3, 4, 5];

const tests = [test1, test2, test3, test4, test5, test6, test7];
tests.forEach((test) => console.log(canBeMadeNonDecreasing(test)));