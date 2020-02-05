/*
    This problem was asked by Amazon.

    Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

    For example, this matrix has 4 islands.

    1 0 0 0 0
    0 0 1 1 0
    0 1 1 0 0
    0 0 0 0 0
    1 1 0 0 1
    1 1 0 0 1
*/

/**
 * A utility function which returns true iff:
 * 1) The coordinates provided are greater than 0 and within the range of the matrix,
 * 2) The value of the matrix at the coordinates is 1 (and not 0),
 * 3) The visited matrix has false set at the coordinates.
 * 
 * @param {int[][]} matrix 
 * @param {int[]} coordinates 
 * @param {bool[][]} visited 
 */
const isSafe = (matrix, coordinates, visited) => {
    const [row, col] = [coordinates[0], coordinates[1]];
    return (row >= 0 && col >= 0
        && row < matrix.length && col < matrix[0].length
        && matrix[row][col] === 1
        && !visited[row][col])
}

/**
 * A modified version of DFS which only searches the (up to) 8 cells neighboring the coordinates.
 * 
 * @param {int[][]} matrix 
 * @param {int[]} coordinates 
 * @param {bool[][]} visited 
 */
const DFS = (matrix, coordinates, visited) => {
    const [row, col] = [coordinates[0], coordinates[1]];

    // mark this cell as visited
    visited[row][col] = true;

    // recur for all 8 neighbors
    for (let i=-1; i < 2; i++) {
        for (let j=-1; j < 2; j++) {
            if (isSafe(matrix, [row+i, col+j], visited)) {
                DFS(matrix, [row+i, col+j], visited);
            }
        }
    }
}

const countIslands = (matrix) => {
    let islandCount = 0;
    if (matrix.length === 0 || matrix[0].length === 0) {
        return islandCount;
    }
    
    // initialize matrix of same size as given and fill with false
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let visited = [...Array(numRows)].map(x => Array(numCols).fill(false));

    // iterate over the whole matrix and count the number of DFS calls
    for (let i=0; i < numRows; i++) {
        for (let j=0; j < numCols; j++) {
            if (matrix[i][j] === 1 && !visited[i][j]) {
                DFS(matrix, [i, j], visited);
                islandCount++;
            }
        }
    }

    return islandCount;
};

// driver code
const m = [ [1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1] ];
console.log(countIslands(m));