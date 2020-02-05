/*
This problem was asked by Snapchat.

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
*/

/**
 * Returns a new list of intervals where those that overlap are merged.
 * 
 * @param {number [][]} intervals
 * @returns {number [][]}
 */
const mergeOverlappingIntervals = (intervals) => {
    if (intervals.length == 0 || intervals.length == 1) {
        return intervals;
    }

    // sort intervals in ascending order by interval start
    intervals.sort((a, b) => a[0] >= b[0]);

    let merged = [];
    let prev = intervals[0];
    for (let i=1; i < intervals.length; i++) {

        const [prevStart, prevEnd] = [prev[0], prev[1]];
        const [curr, currStart, currEnd] = [intervals[i], intervals[i][0], intervals[i][1]];

        if (currStart <= prevEnd) {
            // intervals overlap, so merged previous and current
            prev = [prevStart, Math.max(prevEnd, currEnd)];
        }
        else {
            // intervals don't overlap, so push previous and replace with current
            merged.push(prev);
            prev = curr;
        }
    }

    merged.push(prev);
    return merged;
};

const arrayEquals2D = (arr1, arr2) => {
    return (arr1.length === arr2.length && arr1.every( (elem, index) => arrayEquals(elem, arr2[index])));
}

const arrayEquals = (arr1, arr2) => {
    return (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]));
}

const runTest = (input, expected, name) => {
    const output = mergeOverlappingIntervals(input);
    if (arrayEquals2D(output, expected)) {
        console.log(`Test ${name} passed!\n`);
    }
    else {
        console.log(`Test ${name} failed.\nExpected output:\n${expected}\nProducedOutput:\n${output}\n\n`);
    }
};

const testInput1 = [
    [1, 3],
    [5, 8],
    [4, 10],
    [20, 25]
];
const expectedOutput1 = [
    [1, 3],
    [4, 10],
    [20, 25]
];

const testInput2 = [];
const expectedOutput2 = [];

const testInput3 = [
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6]
];
const expectedOutput3 = [[1, 6]];

const testInput4 = [
    [-1, 2],
    [-500, -100],
    [1000, 2000],
    [-5000, -4000],
    [-4500, -4000],
    [0, 5]
];
const expectedOutput4 = [
    [-5000, -4000],
    [-500, -100],
    [-1, 5],
    [1000, 2000],
];

runTest(testInput1, expectedOutput1, "Test 1");
runTest(testInput2, expectedOutput2, "Test 2");
runTest(testInput3, expectedOutput3, "Test 3");
runTest(testInput4, expectedOutput4, "Test 4");