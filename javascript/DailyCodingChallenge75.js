/*
This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array.
The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/


// TODO: could be improved by using Sets instead of arrays to store valid increasing subsequences
const longestIncreasingSubsequence = (sequence) => {
    if (!sequence || sequence.length === 0) {
        return 0;
    }

    // find all increasing subsequences of the sequence
    let increasingSubsequences = (sequence.length === 0) ? [] : [[sequence[0]]];
    for (let i=1; i < sequence.length; i++) {
        let newValidSubsequences = []; // using temp set to avoid concurrent modification
        for (const subsequence of increasingSubsequences) {
            // if the subsequence ends with a number smaller than our current one
            if (subsequence[subsequence.length - 1] < sequence[i]) {
                // add a new subsequence with current appended to original
                newValidSubsequences.push([...subsequence, sequence[i]]);
            }
        }
        increasingSubsequences.push(...newValidSubsequences);
    }

    // return the length of the longest increasing subsequence
    return Math.max(...(increasingSubsequences.map(subsequence => subsequence.length)));
};

const testSequence1 = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
const testSequence2 = [];
const testSequence3 = [1, 2, 3, 4, 5];
const testSequence4 = [5, 4, 3, 2, 1];
const testSequence5 = [1, -1, 2, 3, -2, 4, 5, 6, -8];
const testSequence6 = [1, 2, 3, 6, 5, 4, 7, 8, 9];
const testSequence7 = null;

console.log(`Given input: [${testSequence1}]\nProduced output: ${longestIncreasingSubsequence(testSequence1)}\n\n`);
console.log(`Given input: [${testSequence2}]\nProduced output: ${longestIncreasingSubsequence(testSequence2)}\n\n`);
console.log(`Given input: [${testSequence3}]\nProduced output: ${longestIncreasingSubsequence(testSequence3)}\n\n`);
console.log(`Given input: [${testSequence4}]\nProduced output: ${longestIncreasingSubsequence(testSequence4)}\n\n`);
console.log(`Given input: [${testSequence5}]\nProduced output: ${longestIncreasingSubsequence(testSequence5)}\n\n`);
console.log(`Given input: [${testSequence6}]\nProduced output: ${longestIncreasingSubsequence(testSequence6)}\n\n`);
console.log(`Given input: [${testSequence7}]\nProduced output: ${longestIncreasingSubsequence(testSequence7)}\n\n`);
