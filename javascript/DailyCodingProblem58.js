/*
This problem was asked by Amazon.

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time.
If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).
given [13, 14, 16, 18, 25, 28, 4, 6, 7, 8, 10] and the element 8, return 9.

You can assume all the integers in the array are unique.
*/

const indexOf = (arr, elem, left=null, right=null) => {
    if (!arr || arr.length === 0) return null;

    // initialize left and right for first call
    if (left === null) left = 0;
    if (right === null) right = arr.length - 1;

    // element not found, stop recursion
    if (left >= right) return null;

    // element found!
    if (arr[left] === elem) return left;
    if (arr[right] === elem) return right;

    // partition the array
    const partitionIndex = left + Math.floor((right-left) / 2);
    if (arr[partitionIndex] === elem) return partitionIndex;
    if (elem > arr[partitionIndex]) {
        return elem < arr[right]
            ? indexOf(arr, elem, partitionIndex+1, right) // check right sublist
            : indexOf(arr, elem, left, partitionIndex-1); // check left sublist
    }
    else {
        return elem < arr[left]
            ? indexOf(arr, elem, partitionIndex+1, right) // check right sublist
            : indexOf(arr, elem, left, partitionIndex-1); // check left sublist
    }
};

console.log(indexOf([13, 14, 16, 18, 25, 28, 4, 6, 7, 8, 10], 25));