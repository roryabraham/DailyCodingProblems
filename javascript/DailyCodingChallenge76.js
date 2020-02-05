/* 
This problem was asked by Google.

You are given an N by M 2D matrix of lowercase letters.
Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically.
That is, the letter at each column is lexicographically later as you go down each row.
It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:

cba
daf
ghi

This is not ordered because of the a in the center. We can remove the second column to make it ordered:

ca
df
gi

So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:

abcdef

Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:

zyx
wvu
tsr

Your function should return 3, since we would need to remove all the columns to order it.
*/

const countLexicographicallyOutOfOrderColumns = (matrix) => {
    if (matrix.length <= 1) {
        return 0;
    }

    const n = matrix.length;
    const m = matrix[0].length;
    let colsToRemove = 0;

    for (let j=0; j < m; j++) {
        let previousLexValue = matrix[0][j].charCodeAt(0);
        for (let i=1; i < n; i++) {
            let currentLexValue = matrix[i][j].charCodeAt(0);
            if (currentLexValue <= previousLexValue)  {
                colsToRemove++;
                break;
            }
            previousLexValue = currentLexValue;
        }
    }

    return colsToRemove;
}

const testMatrix1 = [
 ['c', 'b', 'a'],
 ['d', 'a', 'f'],
 ['g', 'h', 'i']
];

const testMatrix2 = [['a', 'b', 'c', 'd', 'e', 'f']];

const testMatrix3 = [
    ['z', 'y', 'x'],
    ['w', 'v', 'u'],
    ['t', 's', 'r']
];

const testMatrix4 = [
    [],
    [],
    [],
];

const testMatrix5 = [];

console.log(`Test input 1 Produced output: ${countLexicographicallyOutOfOrderColumns(testMatrix1)}\n`);
console.log(`Test input 2 Produced output: ${countLexicographicallyOutOfOrderColumns(testMatrix2)}\n`);
console.log(`Test input 3 Produced output: ${countLexicographicallyOutOfOrderColumns(testMatrix3)}\n`);
console.log(`Test input 4 Produced output: ${countLexicographicallyOutOfOrderColumns(testMatrix4)}\n`);
console.log(`Test input 5 Produced output: ${countLexicographicallyOutOfOrderColumns(testMatrix5)}\n`);